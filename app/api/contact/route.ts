import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, company, message, variant } = body

    // Validação básica
    if (!name || !email || !phone) { 
      return NextResponse.json(
        { error: 'Campos obrigatórios faltando' },
        { status: 400 }
      )
    }

    // Inserir no Supabase
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name,
          email,
          phone,
          company: company || null,
          message: message || null,
          variant,
        },
      ])
      .select()

    if (error) {
      console.error('Erro ao inserir no Supabase:', error)
      return NextResponse.json(
        { error: 'Erro ao enviar formulário' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, data },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erro no servidor:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}