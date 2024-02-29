import axiosInstance from "@/lib/axios-instance"

export const fetchData = async (url: string) => {
    try {
        const response = await axiosInstance.get(url)
        return response?.data
    }
    catch (error) {
        console.log("error")
    }
}