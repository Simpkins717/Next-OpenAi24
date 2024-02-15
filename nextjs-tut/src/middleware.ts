import { NextResponse } from 'next/server';

export function middleware(request: Request) {
  return NextResponse.redirect(new URL('/', request.url));
}
