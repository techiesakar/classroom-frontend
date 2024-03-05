import { getSession } from "@/app/action"
import { ClassCard } from "./class-card"
import { getItems } from "@/lib/api"

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
    // const rooms = await fetchData(url || "/class/views?type=student")
    const rooms = await getItems(url || "/class/views?type=student")

    const currentUser = await getSession()
    return (
        <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">

            {rooms?.map((room: RoomType, id: number) => {
                const isTeacher = currentUser.sub === room.teacher.id
                return (
                    <ClassCard key={room?.id} title={room?.name} subject={room?.subject} teacher={room?.teacher?.name} id={id} inviteCode={room?.inviteCode} url={isTeacher ? `/t/${room?.id}` : `/c/${room?.id}`} />
                )
            }
            )}
        </div>
    )
}

