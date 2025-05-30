import { NextResponse } from 'next/server'
import db from '@/lib/db'

export async function PATCH(req: Request) {
  try {
    const { id, role } = await req.json()
    
    await db.query(
      'UPDATE users SET role = ? WHERE id = ?',
      [role, id]
    )

    return NextResponse.json({ message: 'Rol actualizado' })
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al actualizar rol' },
      { status: 500 }
    )
  }
}
