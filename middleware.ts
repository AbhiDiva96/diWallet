import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Middleware function to protect the dashboard route
export function middleware(req: NextRequest) {
  // Get the token from cookies (assuming JWT is stored in cookies)
  const token = req.cookies.get('token')?.value;

  // If there's no token, redirect to login page
  if (!token) {
    return NextResponse.redirect(new URL('/signin', req.url));
  }

  // If token exists, allow the user to access the dashboard
  return NextResponse.next();
}

// Define which routes the middleware applies to
export const config = {
  matcher: ['/dashboard/:path*'], // Apply middleware to the dashboard route
};
