import { NextResponse } from 'next/server';
import { createConnection } from '@/lib/db';

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const connection = await createConnection();
    
    const { id } = body;

    await connection.execute(
      'UPDATE users SET rol = ? WHERE id = ?',
      ['barbero', id]
    );
    
    await connection.end();
    return NextResponse.json({ message: "Usuario promovido a barbero" });
  } catch (error) {
    console.error('Error promoting user:', error);
    return NextResponse.json({ error: "Error al promover usuario" }, { status: 500 });
  }
}
