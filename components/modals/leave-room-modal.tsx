import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "../ui/button"
import { deleteItem, unEnroll } from "@/app/action"

type PropsType = {
    roomId: string,
    isAdmin: boolean,
}
export const LeaveRoomModal = ({ roomId, isAdmin }: PropsType) => {

    return (
        <AlertDialog>
            <AlertDialogTrigger>
                <Button
                    variant="ghost" className="font-medium leading-none w-full flex items-center justify-start p-2">{isAdmin ? "Delete" : "UnEnroll"}
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{isAdmin ? "Are you sure to delete class ?" : "Are you sure to unenroll the class ?"}</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. Doing this will {isAdmin ? "delete classroom" : "remove classroom from your enrollment"} permanently.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        onClick={async () => {
                            if (isAdmin) {
                                return await deleteItem(`/room/${roomId}`)
                            }
                            else {
                                return await unEnroll(roomId)
                            }
                        }}
                    >Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}
