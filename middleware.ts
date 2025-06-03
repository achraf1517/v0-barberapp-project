import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const adminSession = request.cookies.get('admin_session')
  
  // Protect admin dashboard routes
  if (request.nextUrl.pathname.startsWith('/dashboard/admin') && !adminSession) {
    return NextResponse.redirect(new URL('/dashboard/cliente', request.url))
  }

  // Protect client dashboard routes from admin users
  if (request.nextUrl.pathname.startsWith('/dashboard/cliente') && adminSession) {
    return NextResponse.redirect(new URL('/dashboard/admin', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*']
}
