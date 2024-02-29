"use server"
import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import { redirect } from "next/navigation";

const JWT_SECRET = process.env.NEXT_PUBLIC_ACCESS_TOKEN_SECRET
const key = new TextEncoder().encode(JWT_SECRET)


export async function decrypt(input: string): Promise<any> {
    try {
        const { payload } = await jwtVerify(input, key, {
            algorithms: ["HS256"]
        });
        if (payload) {
            return payload
        }
    }
    catch (error) {
        return null
    }
}

export async function logout() {
    cookies().set("classroom_token", "", { expires: new Date(Date.now()) })
    redirect("/signin")
}

export async function getSession() {
    const session = cookies().get("classroom_token")?.value;
    if (!session) return
    return await decrypt(session)
}

export async function updateSession(request: NextRequest) {
    console.log("Session updated")
}


