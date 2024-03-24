"use client"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { deleteItem } from '@/app/action'
import { AlertDialogTrigger } from "@radix-ui/react-alert-dialog"
import { Button } from "../ui/button"
import { Trash } from "lucide-react"
import { PopoverClose } from "@radix-ui/react-popover"
import toast from "react-hot-toast"

export const DeleteAnnouncementModal = ({ id }: { id: string }) => {

    return (
        <AlertDialog >
            <AlertDialogTrigger asChild>
                <Button
                    variant="ghost" className="font-medium leading-none w-full flex items-center justify-start p-2">
                    <Trash className="size-5 mr-2" />
                    <span> Delete</span>
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete the announcement and remove your data from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <PopoverClose asChild>
                        <AlertDialogAction
                            onClick={async () => {
                                const result = await deleteItem(`/announcement/${id}`)
                                if (result?.success) {
                                    toast.success(result?.success)
                                }
                                else {
                                    toast.error(result?.error)
                                }
                            }}
                        >Continue</AlertDialogAction>
                    </PopoverClose>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
