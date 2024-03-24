"use server"
import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import { redirect } from "next/navigation";
import { LoginFormType, RegisterFormType } from "@/schema/sign-in-schema";
import { revalidatePath } from "next/cache";
import axiosInstance from "@/lib/axios-instance";
import { HTTPMethod } from "@/lib/types";


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
        const response = await axiosInstance.post("/auth/login", values)
        if (response?.status == 200) {
            const token = response?.data?.classroom_token
            cookies().set("classroom_token", token, {
                httpOnly: true,
                expires: new Date(Date.now() + 1000 * 60 * 60 * 1)
            })
            return {
                success: "Success"
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
        const response = await axiosInstance.post("/auth/register", parsedValue)
        if (response.status == 200) {
            return {
                success: response?.data.message || "Successfully Registered"
            }
        }
        else {
            return {
                error: response?.data.message || "Successfully Registered"
            }
        }

    }
    catch (error: any) {
        return {
            error: "Something went wrong"
        }
    }
}

export const submitPost = async <T>(url: string, values: T, type: HTTPMethod) => {
    try {
        if (!(type === "post" || type === "patch")) {
            throw new Error("Unsupported HTTP Method")
        }
        const response = await axiosInstance[type](url, values)

        if (response.status === 200) {
            revalidatePath("/")
            return {
                data: response?.data,
                success: response?.data?.message || "Success"
            }
        }
        else {
            return {
                error: response?.data?.message || "Something went wrong"
            }
        }
    }
    catch (error: any) {
        if (error?.response) {
            return {
                error: error?.response?.data?.message || "Something went wrong"
            }
        }
        else if (error?.request) {
            return {
                error: "Network Error"
            }
        }
        else {
            return {
                error: "Something went wrong"
            }
        }
    }
}



export const getItems = async (url: string) => {
    try {
        const response = await axiosInstance.get(url)
        if (response.status == 200) {
            return response.data
        }
        else {
            return null
        }
    }
    catch (error: any) {
        console.log(error?.response?.data?.message || "505 Error")
    }
}

export const deleteItem = async (path: string) => {
    try {
        const response = await axiosInstance.delete(path)
        revalidatePath("/")
        if (response.status == 200) {
            return {
                success: response?.data?.message || "Success"
            }
        }
        else {
            return null
        }
    }
    catch (error: any) {
        return {
            error: error?.response?.data?.message || "Something went wrong"
        }
    }
}



export const unEnroll = async (id: string) => {
    try {
        const response = await axiosInstance.patch(`/room/unenroll/${id}`)
        revalidatePath("/")
        return response.data
    }
    catch (error) {
        console.log(error, "Error Deleting Room")
    }
}