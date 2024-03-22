import { RoomBanner } from './_components/room-banner'
import { RoomSidebar } from './_components/room-sidebar'
import RoomBody from './_components/room-body'
import { currentUser, getItems } from '@/app/action'

type PropsType = {
    params: {
        id: string,
    }
}

const SingleRoom = async ({ params }: PropsType) => {
    const room = await getItems(`/class/${params.id}`)
    const { sub } = await currentUser()
    const isAdmin = room?.teacher?.id === sub

    return (
        <section className='max-w-5xl w-full mx-auto p-6 space-y-6'>
            <RoomBanner room={room} />
            <div className='flex md:flex-row flex-col gap-6'>
                <RoomSidebar room={room} isAdmin={isAdmin} />
                <RoomBody />
            </div>
        </section>
    )
}

export default SingleRoom