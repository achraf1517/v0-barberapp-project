import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { createConnection } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    const { name, email, password, role } = body;

    // Validaciones
    if (!name?.trim()) {
      return NextResponse.json({ error: "El nombre es requerido" }, { status: 400 });
    }
    if (!email?.trim() || !email.includes('@')) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 });
    }
    if (!password || password.length < 6) {
      return NextResponse.json({ error: "La contraseña debe tener al menos 6 caracteres" }, { status: 400 });
    }

    const connection = await createConnection();

    // Verificar email único
    const [existingUsers] = await connection.execute(
      'SELECT id FROM users WHERE email = ?',
      [email]
    );

    if (Array.isArray(existingUsers) && existingUsers.length > 0) {
      await connection.end();
      return NextResponse.json(
        { error: "El email ya está registrado" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insertar usuario - ajustado a tu esquema
    await connection.execute(
      'INSERT INTO users (nombre, email, password, rol, creado_en) VALUES (?, ?, ?, ?, NOW())',
      [name, email, hashedPassword, role || 'cliente']
    );

    await connection.end();

    return NextResponse.json(
      { message: "Usuario registrado exitosamente" },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error en el registro:', error);
    return NextResponse.json(
      { error: error.message || "Error al registrar usuario" },
      { status: 500 }
    );
  }
}
