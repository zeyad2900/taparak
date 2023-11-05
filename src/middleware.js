// src/middleware.js

import { NextResponse } from 'next/server';

export async function middleware(req) {
  if (req.nextUrl && req.nextUrl.pathname) {
    const path = req.nextUrl.pathname;
    const isRestricted = path === '/register' || path === '/dashboard';
    const token = req.cookies.get('token')?.value || '';

    // Add your authentication logic here
    if (isRestricted && !token) {
      return NextResponse.redirect('/login'); // Redirect to login if not authenticated
    }
  }

  // If req.nextUrl or pathname is not available, don't perform any redirection
  return null;
}

export const config = {
  api: {
    bodyParser: false,
  },
};


export async function checkAuthentication(req) {
    const token = req.cookies.get('token');
    if (!token) {
      return NextResponse.redirect('/login'); // Redirect to login page if no token
    }
    try {
      // Verify and decode the token
      const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
      // If the token is valid, you can allow access
      return null;
    } catch (error) {
      // If the token is invalid, redirect to login
      return NextResponse.redirect('/login');
    }
  }