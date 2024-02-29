import { useRouter } from "next/navigation"
import axios from "axios"
import { BACKEND_URL } from "@/config/backend"
import toast from "react-hot-toast"
import { useModal } from "./modalStore"

export const usePost = (url: string) => {
    const router = useRouter()
    const { onClose } = useModal()
    const onSubmit = async (values: any) => {
        try {
            const response = await axios.post(BACKEND_URL + url, values, {
                withCredentials: true
            })
            console.log(response?.data)
            if (response.status === 200) {
                router.refresh()
                toast.success("Created Successfully")
                onClose()
            }
        }
        catch (error: any) {
            toast.error(error?.response?.data?.message || "Something went wrong")
        }
    }

    return { onSubmit }
}