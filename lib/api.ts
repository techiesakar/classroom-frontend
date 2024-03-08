import { cache } from "react"
import axiosInstance from "./axios-instance"
import axios from "axios"
import { BACKEND_URL } from "@/config/backend"

export const getItems = cache(async (url: string) => {
    try {
        const response = await axiosInstance.get(url)
        return response?.data
    }
    catch (error: any) {
        console.log(error)
        console.log("error")
    }
})