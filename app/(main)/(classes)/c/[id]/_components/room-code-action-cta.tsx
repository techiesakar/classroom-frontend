"use client"
import { updatePost } from "@/app/action"
import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { HOST_URL } from "@/config/env"
import { PopoverClose } from "@radix-ui/react-popover"
import { Clipboard, Link, MoreVertical, RotateCcw } from "lucide-react"
import { useRouter } from "next/navigation"

interface PropsType {
    classId: string,
    inviteCode: string
}

export function RoomCodeActionCta({ classId, inviteCode }: PropsType) {
    const router = useRouter()
    const inviteLink = HOST_URL + `/invite/${inviteCode}`
    return (
        <Popover>
            <PopoverTrigger asChild >
                <Button className='transition-all p-2.5 rounded-full  flex items-center justify-center' variant="ghost">
                    <MoreVertical className="size-5" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-fit py-1 px-2 " >
                <div className=" flex flex-col text-sm">
                    <PopoverClose>
                        <Button onClick={async () => {
                            await navigator.clipboard.writeText(inviteCode)
                        }} variant="ghost" className="font-medium leading-none w-full flex items-center justify-start p-2"><Link className="size-5 mr-2" /><span> Copy Invite Code</span></Button>
                    </PopoverClose>
                    <Separator className="my-1" />
                    <PopoverClose>
                        <Button onClick={async () => {
                            await navigator.clipboard.writeText(inviteLink)
                        }}
                            variant="ghost" className="font-medium leading-none w-full flex items-center justify-start p-2"><Clipboard className="size-5 mr-2" /><span> Copy class invite link</span></Button>
                    </PopoverClose>

                    <PopoverClose>
                        <Button onClick={async () => {
                            await updatePost(`/class/${classId}/generate`, {})
                            router.refresh()

                        }} variant="ghost" className="font-medium leading-none w-full flex items-center justify-start p-2">
                            < RotateCcw className="size-5 mr-2" /> <span>Reset class code</span>
                        </Button>
                    </PopoverClose>

                </div>
            </PopoverContent>
        </Popover>
    )
}
