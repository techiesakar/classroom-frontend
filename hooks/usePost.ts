import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import { useModal } from "./modalStore"

import { BACKEND_URL } from "@/config/backend"
import axios from "axios"

export const usePost = (url: string) => {
    const router = useRouter()
    const { onClose } = useModal()
    const onSubmit = async (values: any) => {
        try {
            const response = await axios.post(BACKEND_URL + url, values, {
                withCredentials: true
            })

            if (response.status === 200) {
                router.refresh()
                toast.success("Created Successfully")
                onClose()
            }
        }
        catch (error: any) {
            console.log(error)
            toast.error(error?.response?.data?.message || "Something went wrong")
        }
    }

    return { onSubmit }
}