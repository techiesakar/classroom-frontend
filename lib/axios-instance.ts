/**
 * This is axios instance for server component
 * Use this only in server component
 * For Client - use default axios
 */
import axios from "axios"
import { cookies } from "next/headers";
import { BACKEND_URL } from "@/config/env";

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