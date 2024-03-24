import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import { submitPost } from "@/app/action"
import { useModal } from "./modalStore"
import { HTTPMethod } from "@/lib/types"

export const usePost = <T>(url: string, options: {
    type: HTTPMethod,
    showToast?: boolean,
    push?: string

}) => {
    const router = useRouter()
    const { onClose } = useModal()

    const onSubmit = async (values: T) => {
        const response = await submitPost(url, values, options.type)
        if (response?.success) {
            if (options.push?.length) {
                router.push(options.push)
            }
            if (options.showToast) {
                toast.success(response.success)
            }
            router.refresh()
        }

        if (response?.error) {
            toast.error(response?.error)
        }
        onClose()

    }

    return { onSubmit }
}