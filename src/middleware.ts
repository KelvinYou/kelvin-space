import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { i18n } from '@/i18n.config'

import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

const PUBLIC_FILE = /\.(.*)$/
 
function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()

  const locale = matchLocale(languages, locales, i18n.defaultLocale)
  return locale
}

export function middleware(request: NextRequest) {

  const pathname = request.nextUrl.pathname

  // Skip requests for items in the public directory
  if (PUBLIC_FILE.test(pathname)) {
    return NextResponse.next(); // or return NextResponse.fromRequest(request);
  }

  const pathnameIsMissingLocale = i18n.locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    )
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}

// export async function middleware(req: NextRequest) {
//   // const origin = req.headers.get('origin');
//   // console.log('origin: ' + origin);

//   if (
//     req.nextUrl.pathname.startsWith('/_next') ||
//     req.nextUrl.pathname.includes('/api/') ||
//     PUBLIC_FILE.test(req.nextUrl.pathname)
//   ) {
//     return
//   }
 
//   // if (req.nextUrl.locale === 'default') {
//   //   const locale = req.cookies.get('NEXT_LOCALE')?.value || 'en'
 
//   //   return NextResponse.redirect(
//   //     new URL(`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url)
//   //   )
//   // }
// }