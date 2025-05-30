import { NextResponse } from 'next/server'
import db from '@/lib/db'

export async function GET() {
  try {
    const [services] = await db.query('SELECT * FROM services')
    return NextResponse.json(services)
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al obtener servicios' },
      { status: 500 }
    )
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const [result] = await db.query(
      'INSERT INTO services (name, price, duration, description) VALUES (?, ?, ?, ?)',
      [data.name, data.price, data.duration, data.description]
    )
    return NextResponse.json(result)
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al crear servicio' },
      { status: 500 }
    )  
  }
}
