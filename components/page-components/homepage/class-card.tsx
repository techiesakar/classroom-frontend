
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { ActionToolTip } from "@/components/action-tooltip"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { randomColor } from "@/app/data/tailwind.colors"
import { Button } from "@/components/ui/button"
import { Contact, FolderClosed, MoreVertical } from "lucide-react"

export const getColorByIndex = (index: number) => {
    const colorIndex = index % randomColor.length
    return randomColor[colorIndex]
}

type PropsType = {
    id: number,
    title: string,
    subject: string,
    teacher: string
}

export function ClassCard({ id, title, subject, teacher }: PropsType) {
    const getHeaderColor = getColorByIndex(id)
    const getAvatarColor = getColorByIndex(id + 1)

    return (
        <Card className="w-full">
            <div className={`${getHeaderColor} text-white rounded-t relative flex p-5 justify-between`}>
                <div className="space-y-2 tracking-wide w-[80%]">
                    <div className="text-2xl font-medium truncate">{title}</div>
                    <div className="text-white text-xs">{subject}</div>
                    <div className="text-xs text-white">{teacher}</div>
                </div>
                <div className="ml-auto"></div>

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


            </div>
            <CardContent className="h-[100px] relative">
                <div className={`${getAvatarColor} size-16 absolute flex items-center justify-center text-3xl   shadow-sm text-white  rounded-full right-0 -translate-x-1/4 translate-y-1/2  bottom-full`}>
                    R
                </div>

            </CardContent>
            <CardFooter className="flex justify-end border-t py-2 px-4 border-gray-200">
                <ActionToolTip label={`Open your work for ${title}`} side="bottom">
                    <Button variant="ghost" className="size-10 p-2.5 rounded-full">
                        <Contact className="size-6" />
                    </Button>
                </ActionToolTip>

                <ActionToolTip label={`Open folder for ${title}`} side="bottom">
                    <Button variant="ghost" className="size-10 p-2.5 rounded-full">
                        <FolderClosed className="size-6" />
                    </Button>
                </ActionToolTip>
            </CardFooter>
        </Card>
    )
}