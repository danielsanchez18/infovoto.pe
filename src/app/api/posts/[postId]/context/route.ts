// app/api/posts/[postId]/context/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase';
import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ postId: string }> }
) {
  const { postId } = await params;
  const supabase = supabaseServer();

  const { data, error } = await supabase
    .from('contexts')
    .select('result, updated_at')
    .eq('post_id', postId)
    .single();

  if (error || !data) {
    return NextResponse.json({ result: null });
  }

  return NextResponse.json({ 
    result: data.result, 
    postId, 
    updatedAt: data.updated_at 
  });
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ postId: string }> }
) {
  const { postId } = await params;
  const { message } = await req.json();

  if (!message || typeof message !== 'string') {
    return NextResponse.json({ error: 'Mensaje requerido' }, { status: 400 });
  }

  const supabase = supabaseServer();

  // 1) Insertar contribución
  const { error: contribError } = await supabase
    .from('contributions')
    .insert({ post_id: postId, message });

  if (contribError) {
    console.error(contribError);
    return NextResponse.json(
      { error: 'No se pudo guardar la contribución' },
      { status: 500 }
    );
  }

  // 2) Obtener contenido del post
  const { data: postRow } = await supabase
    .from('posts')
    .select('content')
    .eq('post_id', postId)
    .single();

  const postContent = postRow?.content ?? '';

  // 3) Obtener TODAS las contribuciones del post
  const { data: contributions } = await supabase
    .from('contributions')
    .select('message, created_at')
    .eq('post_id', postId)
    .order('created_at', { ascending: true });

  const contributionsText =
    contributions
      ?.map((c, i) => `(${i + 1}) ${c.message}`)
      .join('\n') ?? '';

  // 4) Llamar al modelo para generar/actualizar el contexto
  const systemPrompt = `
Eres un asistente que sintetiza "contexto de la comunidad" para publicaciones
sobre política y elecciones peruanas.

Objetivo:
- Crear un texto breve y claro que resuma la información adicional aportada
  por los usuarios sobre este post.

Reglas:
- Sé neutral y objetivo.
- No des recomendaciones de voto.
- No ataques ni defiendas a candidatos.
- Si las contribuciones se contradicen, menciónalo de forma neutra.
- No inventes datos; solo usa el contenido del post y las contribuciones.

Formato:
- Responde SOLO con el texto de contexto, sin encabezados.
`;

  const userPrompt = `
POST ORIGINAL:
${postContent}

CONTRIBUCIONES DE LA COMUNIDAD:
${contributionsText}

Genera un único párrafo de contexto que ayude a otros usuarios
a entender mejor el post.
`.trim();

  const result = await streamText({
    model: google('gemini-2.5-flash'),
    system: systemPrompt,
    prompt: userPrompt,
  });

  const fullText = await result.text; 

  // 5) Upsert en contexts
  const { error: contextError } = await supabase
    .from('contexts')
    .upsert(
      {
        post_id: postId,
        result: fullText,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'post_id' }
    );

  if (contextError) {
    console.error(contextError);
  }

  return NextResponse.json({ 
    result: fullText, 
    postId,
    updatedAt: new Date().toISOString()
  });
}
