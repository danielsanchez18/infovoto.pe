// app/api/chats/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase';
import { google } from '@ai-sdk/google';
import { generateText } from 'ai';

export async function POST(req: NextRequest) {
  const { question } = await req.json();

  if (!question || typeof question !== 'string') {
    return NextResponse.json(
      { error: 'Pregunta requerida' },
      { status: 400 }
    );
  }

  const supabase = supabaseServer();

  const { data, error } = await supabase
    .from('chats')
    .insert({ initial_question: question })
    .select('id')
    .single();

  if (error || !data) {
    console.error(error);
    return NextResponse.json(
      { error: 'No se pudo crear el chat' },
      { status: 500 }
    );
  }

  const { error: msgError } = await supabase
    .from('messages')
    .insert({
      chat_id: data.id,
      role: 'user',
      content: question
    });

  if (msgError) console.error('Error insertando mensaje inicial', msgError);

  // Buscar documentos relevantes en Supabase (RAG simple)
  const { data: docs } = await supabase
    .from('documents')
    .select('title, content')
    .textSearch('content', question, {
      type: 'websearch'
    })
    .limit(5);

  const contextText =
    docs?.map((d) => `# ${d.title}\n${d.content}`).join('\n\n') ?? '';

  // System prompt con restricciones (neutral, Perú 2026)
  const systemPrompt = `
Eres un asistente especializado exclusivamente en información electoral del Perú para las Elecciones Generales 2026.

REGLAS:
1. Solo puedes responder preguntas relacionadas con:
   - Elecciones Generales Perú 2026 (presidenciales, congresales, Parlamento Andino).
   - Candidatos, partidos, alianzas, propuestas y planes de gobierno.
   - Información oficial sobre ONPE, JNE, RENIEC y el proceso electoral.
   - Consultas temáticas siempre que estén vinculadas a propuestas o posiciones de los candidatos (ej.: educación, SUNEDU, salud, economía, seguridad, etc.).

2. Puedes realizar búsquedas de noticias recientes **solo si están relacionadas directamente con las elecciones peruanas 2026**.
   - Prioriza noticias de medios confiables.
   - Da preferencia a noticias de **El Comercio** cuando sea posible.
   - Si encuentras información relevante, inclúyela con claridad y fecha.
   - Si no existe información disponible o verificable, decláralo explícitamente.

3. Si la pregunta NO tiene relación con las elecciones peruanas 2026, debes responder estrictamente:
   "Solo puedo responder preguntas relacionadas con las elecciones peruanas de 2026."

4. Mantén un tono completamente neutral y basado en hechos.
   - No recomiendes por quién votar.
   - No persuadas al usuario ni a grupos específicos.
   - No inventes información bajo ninguna circunstancia.

5. Usa únicamente el CONTEXTO proporcionado por el usuario (si existe) y cualquier noticia encontrada según la Regla 2.
   - Si el contexto está incompleto, declara explícitamente la falta de información.
   - No asumas datos no confirmados.

6. No generes predicciones electorales ni conclusiones especulativas.

7. La extensión de cada respuesta debe estar entre 50 y 200 palabras.

CONTEXTO:
{AQUÍ SE INSERTA EL CONTEXTO DINÁMICO CON RESÚMENES DE CANDIDATOS, PROPUESTAS Y PARTIDOS}
${contextText.slice(0, 8000)}
  `.trim();

  console.log('🤖 Generando respuesta inicial con Gemini...');

  try {
    // Generar respuesta del asistente (sin streaming, respuesta completa)
    const result = await generateText({
      model: google('gemini-2.5-flash'),
      system: systemPrompt,
      messages: [{ role: 'user', content: question }],
      temperature: 0.7,
      maxRetries: 2,
    });

    // Obtener el texto completo de la respuesta
    const assistantResponse = result.text;

    console.log('✅ Respuesta generada, guardando en BD...');

    // Guardar la respuesta del asistente
    const { error: assistantError } = await supabase
      .from('messages')
      .insert({
        chat_id: data.id,
        role: 'assistant',
        content: assistantResponse,
      });

    if (assistantError) {
      console.error('❌ Error guardando respuesta del asistente:', assistantError);
    } else {
      console.log('✅ Respuesta del asistente guardada correctamente');
    }
  } catch (aiError) {
    console.error('❌ Error generando respuesta del asistente:', aiError);
    // No fallar la creación del chat, solo loguear el error
  }

  return NextResponse.json({ chatId: data.id });
}