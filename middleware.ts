import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - /api (API routes)
  // - /_next (Next.js internals)
  // - /_static (inside /public)
  // - all root files inside /public (e.g. /favicon.ico)
  matcher: [
    // Skip all internal paths (_next, _vercel, etc.)
    '/((?!api|_next|_vercel|_static|favicon.ico|sitemap.xml|robots.txt|[\\w-]+\\.\\w+).*)'
  ]

};
