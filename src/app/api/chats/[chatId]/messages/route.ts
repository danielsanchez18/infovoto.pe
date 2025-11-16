// app/api/chats/[chatId]/messages/route.ts
import { NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ chatId: string }> }
) {
  try {
    const { chatId } = await params;
    
    console.log('📥 Solicitando mensajes del chat:', chatId);
    
    const supabase = supabaseServer();
    
    // Obtener mensajes del chat ordenados por fecha
    const { data: messages, error } = await supabase
      .from('messages')
      .select('*')
      .eq('chat_id', chatId)
      .order('created_at', { ascending: true });
    
    if (error) {
      console.error('❌ Error obteniendo mensajes:', error);
      return NextResponse.json(
        { error: 'Error obteniendo mensajes', details: error.message },
        { status: 500 }
      );
    }
    
    console.log('✅ Mensajes obtenidos:', messages?.length || 0);
    
    return NextResponse.json({
      success: true,
      messages: messages || [],
      count: messages?.length || 0,
    });
  } catch (error) {
    console.error('❌ Error en GET /api/chats/[chatId]/messages:', error);
    
    return NextResponse.json(
      {
        error: 'Error interno del servidor',
        details: error instanceof Error ? error.message : 'Error desconocido',
      },
      { status: 500 }
    );
  }
}
