import { NextRequest, NextResponse } from "next/server";
import { currentUser } from "./app/action";

export async function middleware(request: NextRequest) {
    const user = await currentUser()
    const path = request.nextUrl.pathname
    const isPublicPath = path.startsWith("/signin") || path.startsWith("/signup")

    if (user) {
        if (isPublicPath) {
            return NextResponse.redirect(new URL('/', request.url))
        }
    }
    else {
        if (!isPublicPath) {
            return NextResponse.redirect(new URL('/signin', request.url))
        }
    }

}

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}