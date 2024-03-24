"use client"
import { LeaveRoomModal } from "@/components/modals/leave-room-modal"
import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { PopoverClose } from "@radix-ui/react-popover"
import { MoreVertical } from "lucide-react"
import toast from "react-hot-toast"

interface PropsType {
    inviteCode: string, isAdmin: boolean, roomId: string
}

export function RoomCardActionButton({ inviteCode, isAdmin, roomId }: PropsType) {
    const onCopy = () => {
        navigator.clipboard.writeText(inviteCode)
        toast.success('Copied', {
            position: "bottom-center"
        })
    }
    return (
        <Popover>
            <PopoverTrigger asChild >
                <Button className='bg-slate-600/20 hover:bg-slate-600/40 rounded-full transition-all p-2.5 size-10  flex items-center justify-center' variant="ghost">
                    <MoreVertical className="text-white" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-fit py-1 px-2 absolute left-[-88px]" >
                <div className=" flex flex-col text-sm">
                    {isAdmin
                        &&
                        <>
                            <Button variant="ghost" className="font-medium leading-none w-full flex items-center justify-start p-2">Edit Room</Button>
                            <LeaveRoomModal roomId={roomId} isAdmin={isAdmin} />
                        </>

                    }
                    <PopoverClose>
                        <Button onClick={onCopy} variant="ghost" className="font-medium leading-none w-full flex items-center justify-start p-2">Copy Invite Code</Button>
                    </PopoverClose>
                    {!isAdmin &&
                        <>
                            <Separator className="my-1" />
                            <Button variant="ghost" className="font-medium leading-none w-full flex items-center justify-start p-2">Report Abuse</Button>
                        </>
                    }
                </div>
            </PopoverContent>
        </Popover>
    )
}
