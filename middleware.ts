import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SESSION_TOKEN } from "./components/common/constant";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  let cookie: any = request.cookies.get(SESSION_TOKEN);
  if (!cookie?.value) {
    return NextResponse.redirect(new URL("/", request.url));
  } else if (cookie !== undefined && request.url === "http://localhost:3000/") {
    // return NextResponse.rewrite(new URL('/chat', request.url))
    console.log(cookie !== undefined, request.url);
    return NextResponse.redirect(new URL("/chat", request.url));
  }
}

// export default function middleware(req:NextRequest){
//   let verify = req.cookies.get("session_token");
//   let url = req.url
//   if(!verify && url.includes('/chat')){
//       return NextResponse.redirect("/");
//   }
//   if (verify && url === "http://localhost:3000/") {
//     return NextResponse.redirect("http://localhost:3000/chat");
//   }

// }

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/chat/:path*",
    "/dashboard/:path*",
    "/settings/profile",
    "/settings/payment",
    "/privacyPolicy",
    "/help&support",
    "/logout",
    "/subscription",
    // "/",
  ],
};
