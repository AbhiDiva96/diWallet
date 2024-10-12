import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
export { default } from "next-auth/middleware"
 import { getToken } from 'next-auth/jwt'
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {

   const token = await getToken({req : request})
   const url = request.nextUrl;

   if(token && ( 
    url.pathname.startsWith('/signin') ||
    url.pathname.startsWith('/signup') ||
    url.pathname.startsWith('/')
  )){
   return NextResponse.redirect(new URL('/dashboard', request.url))
  }
}
 
// See "Matching Paths" below to learn more
export const config = {
     matcher: ['/dashbord/:path*']
}


// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// // Middleware function to protect the dashboard route
// export function middleware(req: NextRequest) {
//   // Get the token from cookies (assuming JWT is stored in cookies)
//   const token = req.cookies.get('token')?.value;

//   // If there's no token, redirect to login page
//   if (!token) {
//     return NextResponse.redirect(new URL('/signin', req.url));
//   }

//   // If token exists, allow the user to access the dashboard
//   return NextResponse.next();
// }

// // Define which routes the middleware applies to


// export const config = { matcher: ["/dashboard"] }