import { LoginFormType } from "@/schema/sign-in-schema"
import { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import { BACKEND_URL } from "@/config/backend"
import toast from "react-hot-toast"

export const useAuth = (url: string) => {
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")
    const router = useRouter()

    const onSubmit = async (values: LoginFormType) => {

        try {
            const response = await axios.post(BACKEND_URL + url, values, {
                withCredentials: true
            })
            console.log(response?.data)
            if (response.status === 200) {
                setSuccess(response?.data?.message || "Success")
                setError("")
                if (url == "/auth/register") {
                    router.replace("/signin")
                    toast.success(response?.data?.message || "Loggedin Successfully")
                }
                else {
                    router.replace("/")
                    toast.success(response?.data?.message || "Registered Successfully")
                }

            }
        }
        catch (error: any) {
            console.log(error)
            setSuccess("")
            setError(error?.response?.data?.message || "")
        }
    }

    return { onSubmit, success, error }
}