import { useState } from "react"
import { useRouter } from "next/navigation"
import { login } from "@/app/action"
import { LoginFormType, RegisterFormType } from "@/schema/sign-in-schema"



export const useAuth = () => {
    const router = useRouter()
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)


    const onSubmit = async (values: LoginFormType | RegisterFormType) => {
        setLoading(true)
        const result = await login(values)
        if (result?.success) {
            setError("")
            setSuccess(result.success)
            router.replace("/")
        }
        if (result?.error) {
            setSuccess("")
            setError(result.error)
        }
        setLoading(false)
    }

    return { onSubmit, success, error, loading }
}