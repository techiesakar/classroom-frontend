import { getSession } from '@/app/action'
import { getItems } from '@/lib/api'
import { RoomBanner } from './_components/room-banner'
import { RoomSidebar } from './_components/room-sidebar'
import RoomBody from './_components/room-body'

type PropsType = {
    params: {
        id: string,
    }
}

const SingleClass = async ({ params }: PropsType) => {
    const room = await getItems(`/class/${params.id}`)
    return (
        <section className='max-w-5xl w-full mx-auto p-6 space-y-6'>
            <RoomBanner room={room} />
            <div className='flex md:flex-row flex-col gap-6'>
                <RoomSidebar classId={room?.id} inviteCode={room?.inviteCode} />
                <RoomBody />
            </div>
        </section>
    )
}

export default SingleClass