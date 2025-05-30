import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: 'localhost',
  user: 'admin',
  password: 'admin1234',
  database: 'barberapp'
});

// GET - Obtener todos los usuarios
export async function GET() {
  try {
    const [rows] = await db.query('SELECT * FROM users');
    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json({ error: 'Error al obtener usuarios' }, { status: 500 });
  }
}

// POST - Crear nuevo usuario
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const [result] = await db.query(
      'INSERT INTO users (nombre, email, telefono, rol, estado) VALUES (?, ?, ?, ?, ?)',
      [data.nombre, data.email, data.telefono, data.rol, data.estado]
    );
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: 'Error al crear usuario' }, { status: 500 });
  }
}

// PATCH - Actualizar usuario
export async function PATCH(request: Request) {
  try {
    const data = await request.json();
    const [result] = await db.query(
      'UPDATE users SET rol = ?, estado = ? WHERE id = ?',
      [data.rol, data.estado, data.id]
    );
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: 'Error al actualizar usuario' }, { status: 500 });
  }
}

// DELETE - Eliminar usuario
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const [result] = await db.query('DELETE FROM users WHERE id = ?', [id]);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: 'Error al eliminar usuario' }, { status: 500 });
  }
}
