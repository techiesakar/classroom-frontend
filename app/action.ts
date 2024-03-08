"use server"
import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import { redirect } from "next/navigation";
import axiosInstance from "@/lib/axios-instance";
import { LoginFormType, RegisterFormType } from "@/schema/sign-in-schema";
import { revalidatePath } from "next/cache";


const JWT_SECRET = process.env.NEXT_PUBLIC_ACCESS_TOKEN_SECRET
const key = new TextEncoder().encode(JWT_SECRET)


export async function logout() {
    cookies().set("classroom_token", "", { expires: new Date(Date.now()) })
    redirect("/signin")
}

export async function currentUser() {
    const session = cookies().get("classroom_token")?.value;
    if (!session) return
    return await decrypt(session)
}

export async function updateSession(request: NextRequest) {
    console.log("Session updated")
}

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

export async function login(values: LoginFormType) {
    try {
        const response = await axiosInstance.post("/auth/login/", values)
        const token = response?.data?.classroom_token
        if (response.status === 200) {
            cookies().set("classroom_token", token, {
                httpOnly: true,
                expires: new Date(Date.now() + 1000 * 60 * 60 * 1)
            })
            return {
                success: response?.data?.message || "Success"
            }
        }
    }
    catch (error: any) {
        return {
            error: error?.response?.data?.message || "Something went wrong"
        }
    }
}

export async function register(values: RegisterFormType) {
    const parsedValue = {
        name: values.name,
        username: values.username,
        password: values.password
    }
    try {
        const response = await axiosInstance.post("/auth/register/", parsedValue)

        if (response?.status === 200) {
            return {
                success: response?.data?.message || "Successfully Registered"
            }
        }
        else {
            return {
                success: response?.data?.message || "Something went wrong"
            }
        }
    }
    catch (error: any) {
        return {
            error: error?.response?.data?.message || "Something went wrong"
        }
    }
}



export const submitPost = async (url: string, values: any) => {
    try {
        const response = await axiosInstance.post(url, values)
        if (response.status === 200) {
            revalidatePath("/")
            return {
                success: response?.data?.message || "Success"
            }
        }
    }
    catch (error: any) {
        return {
            error: error?.response?.data?.message || "Something went wrong"
        }
    }
}

export const updatePost = async (url: string, values: any) => {
    try {
        const response = await axiosInstance.patch(url, values)
        if (response.status === 200) {
            return {
                success: response?.data?.message || "Success",
                data: response?.data
            }
        }
    }
    catch (error: any) {
        return {
            error: error?.response?.data?.message || "Something went wrong"
        }
    }
}

