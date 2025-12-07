export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, phone, message } = body

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Email servisi entegrasyonu yapılacak
    // Veritabanına kayıt yapılacak
    // Satış ekibine bildirim gönderilecek

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json(
      { success: true, message: 'Demo request received successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing demo request:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
