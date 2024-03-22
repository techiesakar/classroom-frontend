import { currentUser, getItems } from "@/app/action"
import { ClassCard } from "./class-card"

interface RoomType {
    id: string,
    name: string,
    subject: string,
    inviteCode: string,
    teacher: {
        id: string,
        name: string
    }
}

export async function ClassGrid({ url }: { url: string }) {
    const { sub } = await currentUser()
    const rooms = await getItems(url || "/class/views?type=student")
    return (
        <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">

            {rooms?.map((room: RoomType, id: number) => {
                const isAdmin = room?.teacher?.id === sub
                return (
                    <ClassCard key={room?.id} title={room?.name} roomId={room?.id} subject={room?.subject} teacher={room?.teacher?.name} id={id} inviteCode={room?.inviteCode} url={`/c/${room?.id}`} isAdmin={isAdmin} />
                )
            }
            )}
        </div>
    )
}

