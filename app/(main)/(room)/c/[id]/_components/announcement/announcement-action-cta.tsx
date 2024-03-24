"use client"
import { DeleteAnnouncementModal } from "@/components/modals/delete-announcement-modal"
import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { TAnnouncement } from "@/lib/types"
import { PopoverClose } from "@radix-ui/react-popover"
import { Clipboard, Link, MoreVertical } from "lucide-react"
type PropsType = {
    announcement: TAnnouncement
}
export function AnnouncementActionCta({ announcement }: PropsType) {
    return (
        <Popover >
            <PopoverTrigger asChild >
                <Button className='transition-all p-2.5 rounded-full  flex items-center justify-center' variant="ghost">
                    <MoreVertical className="size-5" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-fit py-1 px-2 " >
                <div className=" flex flex-col text-sm">
                    <Button variant="ghost" className="font-medium leading-none w-full flex items-center justify-start p-2"><Link className="size-5 mr-2" /><span> Edit</span></Button>
                    <Separator className="my-1" />
                    <PopoverClose asChild>
                        <DeleteAnnouncementModal id={announcement.id} />
                    </PopoverClose>
                    <Button
                        variant="ghost" className="font-medium leading-none w-full flex items-center justify-start p-2">
                        <Clipboard className="size-5 mr-2" />
                        <span> Copy Link</span>
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    )
}
