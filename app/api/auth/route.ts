import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';
import { cookies } from 'next/headers';

const db = mysql.createPool({
  host: 'localhost',
  user: 'admin',
  password: 'admin1234',
  database: 'barberapp'
});

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Get user with password for verification
    const [rows]: any = await db.query(
      'SELECT id, nombre, email, password, rol FROM users WHERE email = ?',
      [email]
    );

    if (rows.length === 0) {
      return NextResponse.json({ error: 'Credenciales inválidas' }, { status: 401 });
    }

    const user = rows[0];

    // Verify password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return NextResponse.json({ error: 'Credenciales inválidas' }, { status: 401 });
    }

    // Set admin session cookie only for admin users
    if (user.rol === 'admin') {
      const cookieStore = cookies();
      cookieStore.set('admin_session', 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 // 24 hours
      });
    }

    // Return user data without password
    const userData = {
      id: user.id,
      nombre: user.nombre,
      email: user.email,
      rol: user.rol
    };

    return NextResponse.json({ user: userData });
  } catch (error) {
    console.error('Error en autenticación:', error);
    return NextResponse.json({ error: 'Error de autenticación' }, { status: 500 });
  }
}

// Add a GET method to check authentication status
export async function GET() {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get('admin_session');
    return NextResponse.json({ authenticated: !!session });
  } catch (error) {
    return NextResponse.json({ authenticated: false });
  }
}
