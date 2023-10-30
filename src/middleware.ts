import { NextRequest, NextResponse } from 'next/server'
 
const PUBLIC_FILE = /\.(.*)$/
 
export async function middleware(req: NextRequest) {
  // const origin = req.headers.get('origin');
  // console.log('origin: ' + origin);

  if (
    req.nextUrl.pathname.startsWith('/_next') ||
    req.nextUrl.pathname.includes('/api/') ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return
  }
 
  // if (req.nextUrl.locale === 'default') {
  //   const locale = req.cookies.get('NEXT_LOCALE')?.value || 'en'
 
  //   return NextResponse.redirect(
  //     new URL(`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url)
  //   )
  // }
}