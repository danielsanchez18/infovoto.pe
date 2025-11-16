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