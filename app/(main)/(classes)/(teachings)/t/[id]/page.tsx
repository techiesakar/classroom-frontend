import { getSession } from "@/app/action"
import { getItems } from "@/lib/api"
import { redirect } from "next/navigation"

type PropsType = {
    params: {
        id: string
    }
}

const SingleTeaching = async ({ params }: PropsType) => {
    const room = await getItems(`/class/${params.id}`)
    const { sub } = await getSession()
    if (sub !== room.teacher.id) {
        redirect("/")
    }

    return (
        <div>{room?.name}</div>
    )
}

export default SingleTeaching