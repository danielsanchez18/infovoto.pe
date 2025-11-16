// app/api/posts/[postId]/contributions/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase';
import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

export async function POST(
  req: NextRequest,
  { params }: { params: { postId: string } }
) {
  const { postId } = params;
  const { message, content, authorName } = await req.json();

  if (!message || typeof message !== 'string') {
    return NextResponse.json({ error: 'Mensaje requerido' }, { status: 400 });
  }

  if (!content || typeof content !== 'string') {
    return NextResponse.json({ error: 'Contenido del post requerido' }, { status: 400 });
  }

  const supabase = supabaseServer();

  // 1) VALIDAR SI EL POST EXISTE EN LA TABLA posts
  const { data: existingPost, error: postCheckError } = await supabase
    .from('posts')
    .select('post_id, content')
    .eq('post_id', postId)
    .single();

  if (postCheckError && postCheckError.code !== 'PGRST116') {
    // Error diferente a "no encontrado"
    console.error('Error verificando post:', postCheckError);
    return NextResponse.json(
      { error: 'Error verificando el post', details: postCheckError.message },
      { status: 500 }
    );
  }

  let postContent = content;

  // 2) SI NO EXISTE, CREAR EL POST PRIMERO
  if (!existingPost) {
    console.log('📝 Post no existe, creándolo...');
    const { error: createPostError } = await supabase
      .from('posts')
      .insert({
        post_id: postId,
        content: content,
        author_name: authorName || null,
      });

    if (createPostError) {
      console.error('Error creando post:', createPostError);
      return NextResponse.json(
        { error: 'No se pudo crear el post', details: createPostError.message },
        { status: 500 }
      );
    }
    console.log('✅ Post creado exitosamente');
  } else {
    console.log('✅ Post ya existe, usando contenido existente');
    postContent = existingPost.content;
  }

  // 3) INSERTAR LA CONTRIBUCIÓN
  const { error: contribError } = await supabase
    .from('contributions')
    .insert({ 
      post_id: postId, 
      message: message,
    });

  if (contribError) {
    console.error('Error al guardar contribución:', contribError);
    return NextResponse.json(
      { error: 'No se pudo guardar la contribución', details: contribError.message },
      { status: 500 }
    );
  }

  console.log('✅ Contribución guardada');

  // 4) OBTENER TODAS LAS CONTRIBUCIONES DEL POST
  const { data: contributions } = await supabase
    .from('contributions')
    .select('message, created_at')
    .eq('post_id', postId)
    .order('created_at', { ascending: true });

  const contributionsText =
    contributions
      ?.map((c, i) => `(${i + 1}) ${c.message}`)
      .join('\n') ?? '';

  // 5) LLAMAR AL LLM PARA GENERAR/ACTUALIZAR EL CONTEXTO
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

  console.log('🤖 Contexto generado por LLM');

  // 6) UPSERT EN CONTEXTS (actualizar o crear)
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
    console.error('Error al actualizar contexto:', contextError);
    return NextResponse.json(
      { error: 'No se pudo actualizar el contexto', details: contextError.message },
      { status: 500 }
    );
  }

  console.log('✅ Contexto guardado exitosamente');

  return NextResponse.json({ 
    success: true,
    message: 'Contribución y contexto guardados', 
    context: fullText 
  });
}
