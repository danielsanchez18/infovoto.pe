// app/api/chat/[chatId]/route.ts
import { google } from '@ai-sdk/google';
import { streamText, convertToCoreMessages } from 'ai';
import type { UIMessage } from 'ai';
import { supabaseServer } from '@/lib/supabase';

export const maxDuration = 30; // opcional

export async function POST(
  req: Request,
  { params }: { params: Promise<{ chatId: string }> }
) {
  try {
    const { chatId } = await params;
    const { messages }: { messages: UIMessage[] } = await req.json();

    console.log('📥 Recibido chat request:', { chatId, messageCount: messages.length });

    // Verificar API key
    if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
      console.error('❌ GOOGLE_GENERATIVE_AI_API_KEY no está configurada');
      return new Response(
        JSON.stringify({ error: 'API key no configurada' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const supabase = supabaseServer();

    // 1) Último mensaje del usuario (pregunta actual)
    const lastUserMessage = [...messages]
      .reverse()
      .find((m) => m.role === 'user');

    // Extract text from UIMessage parts
    const userQuestion = lastUserMessage?.parts
      .filter((part): part is { type: 'text'; text: string } => part.type === 'text')
      .map(part => part.text)
      .join('') ?? '';

    console.log('🔍 Pregunta del usuario:', userQuestion);

  // 2) Buscar documentos relevantes en Supabase (RAG simple)
  // Usamos text search para no complicarnos con embeddings en la hackathon
  const { data: docs } = await supabase
    .from('documents')
    .select('title, content')
    .textSearch('content', userQuestion, {
      type: 'websearch'
    })
    .limit(5);

  const contextText =
    docs?.map((d) => `# ${d.title}\n${d.content}`).join('\n\n') ?? '';

  // 3) System prompt con restricciones (neutral, Perú 2026)
  const systemPrompt = `
Eres un asistente especializado en información electoral de PERÚ para las elecciones generales de 2026.

REGLAS IMPORTANTES:
- Solo respondes preguntas relacionadas con:
  - Elecciones generales Perú 2026 (presidenciales, congresales, etc.).
  - Candidatos, partidos, propuestas, planes de gobierno.
  - Información institucional (ONPE, JNE, RENIEC) relacionada al proceso electoral.
- Si la pregunta NO tiene relación con elecciones peruanas 2026, responde claramente:
  "Solo puedo responder preguntas relacionadas con las elecciones peruanas de 2026."
- Mantén un tono NEUTRAL y basado en hechos.
  - No recomiendes por quién votar.
  - No intentes persuadir al usuario ni a grupos específicos.
  - Si no tienes información fiable, dilo y explícitalo.
- Usa el contexto provisto a continuación como fuente principal.
  - Si algo no está en el contexto, declara la incertidumbre.
- NO MENTIR bajo ninguna circunstancia.
- Maneja respuestas de entre 50 y 200 palabras máximo.

CONTEXTO (resúmenes de propuestas y candidatos, puede estar incompleto):
${contextText.slice(0, 8000)}
  `.trim();

    // Convertir UIMessages a CoreMessages
    const coreMessages = convertToCoreMessages(messages);
    console.log('✅ Mensajes convertidos:', coreMessages.length);

    // Llamar a Google Gemini con manejo de errores
    // Usando Gemini 2.5 Flash (modelo estable más reciente)
    const result = streamText({
      model: google('gemini-2.5-flash'),
      system: systemPrompt,
      messages: coreMessages,
      temperature: 0.7,
      maxRetries: 2,
    });

    console.log('🤖 Stream iniciado con Google Gemini');

    // 4) Persistir mensajes del usuario (solo nuevos)
    const newUserMessages = messages
      .filter((m) => m.role === 'user')
      .map((m) => {
        const textContent = m.parts
          .filter((part): part is { type: 'text'; text: string } => part.type === 'text')
          .map(part => part.text)
          .join('');
        
        return {
          chat_id: chatId,
          role: m.role,
          content: textContent,
        };
      });

    if (newUserMessages.length > 0) {
      const { error: msgError } = await supabase
        .from('messages')
        .insert(newUserMessages);

      if (msgError) console.error('❌ Error guardando mensajes del usuario', msgError);
      else console.log('✅ Mensajes del usuario guardados en BD');
    }

    // 5) Usar el hook onFinish para guardar la respuesta completa
    let fullResponse = '';
    
    // Capturar y guardar la respuesta del asistente cuando termine
    const assistantMessagePromise = (async () => {
      const fullText = await result.text;
      fullResponse = fullText;
      
      console.log('💾 Guardando respuesta del asistente...');
      const { error: assistantError } = await supabase
        .from('messages')
        .insert({
          chat_id: chatId,
          role: 'assistant',
          content: fullText,
        });

      if (assistantError) {
        console.error('❌ Error guardando respuesta del asistente', assistantError);
      } else {
        console.log('✅ Respuesta del asistente guardada en BD');
      }
    })();

    // No esperamos la promesa para no bloquear el streaming
    assistantMessagePromise.catch(err => 
      console.error('❌ Error en guardado asíncrono:', err)
    );

    // Retornar el stream de texto para el cliente
    return result.toTextStreamResponse();
  } catch (error) {
    console.error('❌ Error en chat API:', error);
    
    return new Response(
      JSON.stringify({ 
        error: 'Error procesando el chat',
        details: error instanceof Error ? error.message : 'Error desconocido'
      }),
      { 
        status: 500, 
        headers: { 'Content-Type': 'application/json' } 
      }
    );
  }
}
