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

export function JoinClassModal() {
    const { isOpen, onClose, type } = useModal()
    const isModalOpen = isOpen && type === "joinClass"
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
                        <Input id="name" placeholder="Class Code" className="col-span-4 border border-gray-200" />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Join Now</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
