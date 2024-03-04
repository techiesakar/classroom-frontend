import axios from "axios"
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
import { BACKEND_URL } from "@/config/backend"
import { useModal } from "@/hooks/modalStore"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"

export function JoinClassModal() {
    const { isOpen, onClose, type } = useModal()
    const router = useRouter()

    const isModalOpen = isOpen && type === "joinClass"
    const [inviteCode, setInviteCode] = useState("")
    const onSubmit = async () => {
        if (inviteCode.length < 3) {
            return null
        }
        try {
            const response = await axios.patch(BACKEND_URL + `/class/${inviteCode}/join`, {}, {
                withCredentials: true
            })

            if (response.status === 200) {
                router.refresh()
                toast.success("Joined Successfully")
                onClose()
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
