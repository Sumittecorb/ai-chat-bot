import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { SESSION_TOKEN } from './components/common/constant'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    let cookie:any = request.cookies.get(SESSION_TOKEN)
    if(!cookie?.value){
        return NextResponse.redirect(new URL('/', request.url))
    }
    // else{
    //   return NextResponse.redirect(new URL('/chat', request.url))
    // }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/chat/:path*', '/dashboard/:path*','/settings/profile',
  '/settings/payment','/privacyPolicy','/help&support','/logout',
  '/subscription'
],
}