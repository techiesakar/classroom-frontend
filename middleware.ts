import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./app/actions";

export async function middleware(request: NextRequest) {
    const currentUser = await getSession()
    const path = request.nextUrl.pathname
    const isPublicPath = path.startsWith("/signin") || path.startsWith("/signup")

    if (currentUser) {
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
    matcher: ['/', '/signin/:path*', '/signup/:path*'],
}