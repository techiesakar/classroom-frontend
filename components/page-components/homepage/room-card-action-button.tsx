import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { MoreVertical } from "lucide-react"

export function RoomCardActionButton() {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button className='bg-slate-600/20 hover:bg-slate-600/40 rounded-full transition-all p-2.5 size-10  flex items-center justify-center' variant="ghost">
                    <MoreVertical className="text-white" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-fit py-1 px-2 absolute left-[-88px]" >
                <div className=" flex flex-col text-sm">
                    <Button variant="ghost" className="font-medium leading-none  w-full flex items-center justify-start p-2">Move</Button>
                    <Button variant="ghost" className="font-medium leading-none w-full flex items-center justify-start p-2">UnEnroll</Button>
                    <Separator className="my-1" />
                    <Button variant="ghost" className="font-medium leading-none w-full flex items-center justify-start p-2">Report Abuse</Button>
                </div>
            </PopoverContent>
        </Popover>
    )
}
