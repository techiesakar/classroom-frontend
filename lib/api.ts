import { cache } from "react"
import axiosInstance from "./axios-instance"

export const getItems = cache(async (url: string) => {
    try {
        const response = await axiosInstance.get(url)
        return response?.data
    }
    catch (error: any) {

        console.log("error")
    }
})