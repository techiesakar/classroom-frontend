"use client"
import { ActionToolTip } from "@/components/action-tooltip"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Contact, FolderClosed, } from "lucide-react"
import { RoomCardActionButton } from "./room-card-action-button"
import { getColorByIndex } from "@/lib/utils"
import { useRouter } from "next/navigation"

type PropsType = {
    id: number,
    roomId: string,
    title: string,
    subject: string,
    teacher: string,
    inviteCode: string
    url: string,
    isAdmin: boolean
}

export async function ClassCard({ id, roomId, title, subject, teacher, inviteCode, url, isAdmin }: PropsType) {
    const router = useRouter()
    const getHeaderColor = getColorByIndex(id)
    const getAvatarColor = getColorByIndex(id + 1)

    return (
        <Card className="w-full cursor-pointer">
            <div className={`${getHeaderColor} text-white rounded-t relative flex p-5 py-8 justify-between`}>
                <div onClick={() => router.push(url || "/")} className="space-y-2 tracking-wide w-[80%]">
                    <div className="text-2xl font-medium truncate capitalize">{title}</div>
                    <div className="text-white text-xs capitalize">{subject}</div>
                    <div className="text-xs text-white capitalize">{teacher}</div>
                </div>
                <div className="ml-auto"></div>
                <RoomCardActionButton inviteCode={inviteCode} isAdmin={isAdmin} roomId={roomId} />
            </div>
            <CardContent onClick={() => router.push(url || "/")} className="h-[100px] relative">
                <div className={`${getAvatarColor} size-16 uppercase absolute flex items-center justify-center text-3xl   shadow-sm text-white  rounded-full right-0 -translate-x-1/4 translate-y-1/2  bottom-full`}>
                    {title[0]}
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