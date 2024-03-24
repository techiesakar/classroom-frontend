import { useState } from "react"
import { useModal } from "@/hooks/modalStore"
import { usePost } from "@/hooks/usePost"

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

export function JoinRoomModal() {
    const { isOpen, onClose, type } = useModal()
    const isModalOpen = isOpen && type === "joinRoom"
    const [inviteCode, setInviteCode] = useState("")

    const { onSubmit } = usePost(`/room/${inviteCode}/join`, {
        type: "patch",
        showToast: true,
        push: "/c"
    })


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
                    <Button disabled={inviteCode.length < 4} onClick={() => onSubmit(inviteCode)} type="submit">Join Now</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
