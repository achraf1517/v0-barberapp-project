import { NextResponse } from 'next/server'
import pool from '@/lib/db'

export async function GET() {
  try {
    const [users] = await pool.query('SELECT * FROM users ORDER BY created_at DESC')
    return NextResponse.json(users)
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al obtener usuarios' },
      { status: 500 }
    )
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const [result] = await pool.query(
      'INSERT INTO users (name, email, role) VALUES (?, ?, ?)',
      [data.name, data.email, data.role]
    )
    return NextResponse.json(result)
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al crear usuario' },
      { status: 500 }
    )
  }
}
