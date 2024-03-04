"use server"
import axios from "axios"
import { BACKEND_URL } from "@/config/backend"
import { cookies } from "next/headers";

const axiosInstance = axios.create({
    baseURL: BACKEND_URL,
    withCredentials: true
})

axiosInstance.interceptors.request.use(
    async (config: any) => {
        const token = cookies().get("classroom_token")?.value;
        config.headers = {
            Authorization: `Bearer ${token}`,

        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default axiosInstance