// app/api/chats/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase';

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

  // Guarda el primer mensaje del usuario opcionalmente
  const { error: msgError } = await supabase
    .from('messages')
    .insert({
      chat_id: data.id,
      role: 'user',
      content: question
    });

  if (msgError) console.error('Error insertando mensaje inicial', msgError);

  return NextResponse.json({ chatId: data.id });
}