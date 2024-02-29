import { fetchData } from "@/app/action"
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
export async function ClassGrid() {
    const rooms = await fetchData("/class/views?type=student")


    return (
        <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
            {rooms?.map((item: RoomType, id: number) => (
                <ClassCard key={item?.id} title={item?.name} subject={item?.subject} teacher={item?.teacher?.name} id={id} />
            ))}
        </div>
    )
}

