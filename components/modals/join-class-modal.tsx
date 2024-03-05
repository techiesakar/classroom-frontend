import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { useModal } from "@/hooks/modalStore"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"
import { updatePost } from "@/app/action"

export function JoinClassModal() {
    const router = useRouter()
    const { isOpen, onClose, type } = useModal()
    const isModalOpen = isOpen && type === "joinClass"
    const [inviteCode, setInviteCode] = useState("")
    const onSubmit = async () => {
        if (inviteCode.length < 3) {
            return null
        }
        try {
            const response = await updatePost(`/class/${inviteCode}/join`, {})
            router.refresh()
            if (response?.success) {
                router.refresh()
                router.push("/c")
                toast.success(response.success)
                onClose()
            }
            if (response?.error) {
                toast.error(response?.error)
            }
        }
        catch (error: any) {
            toast.error(error?.response?.data?.message || "Something went wrong")
        }
    }
    return (
        <Dialog open={isModalOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Join Class</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>

                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Input onChange={(e) => setInviteCode(e.target.value)} id="name" placeholder="Class Code" className="col-span-4 border border-gray-200" />
                    </div>
                </div>
                <DialogFooter>
                    <Button onClick={() => onSubmit()} type="submit">Join Now</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
