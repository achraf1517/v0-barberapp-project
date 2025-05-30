import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: 'localhost',
  user: 'admin',
  password: 'admin1234',
  database: 'barberapp'
});

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const [rows]: any = await db.query(
      'SELECT * FROM users WHERE email = ? AND rol = "admin"',
      [email]
    );

    if (rows.length > 0) {
      // Here you should properly verify the password with bcrypt
      // This is just a basic example
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ error: 'Error de autenticación' }, { status: 500 });
  }
}
