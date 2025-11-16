// app/api/contexts/route.ts
import { NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase';

/**
 * GET /api/contexts
 * Obtiene todos los contextos disponibles, ordenados por post_id
 */
export async function GET() {
  const supabase = supabaseServer();

  const { data, error } = await supabase
    .from('contexts')
    .select('post_id, result, updated_at')
    .order('post_id', { ascending: true });

  if (error) {
    console.error('Error obteniendo contextos:', error);
    return NextResponse.json(
      { error: 'No se pudieron obtener los contextos', details: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({
    success: true,
    contexts: data || [],
    count: data?.length || 0,
  });
}
