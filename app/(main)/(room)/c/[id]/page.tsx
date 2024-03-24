import { RoomBanner } from './_components/room-banner'
import { RoomSidebar } from './_components/room-sidebar'
import { currentUser, getItems } from '@/app/action'
import { AnnouncementForm } from './_components/announcement/announcement-form'
import { AnnouncementBlock } from './_components/announcement/announcement-block'

type PropsType = {
    params: {
        id: string,
    }
}

const SingleRoom = async ({ params }: PropsType) => {
    const room = await getItems(`/room/${params.id}`)
    const { sub } = await currentUser()
    const isAdmin = room?.teacher?.id === sub

    return (
        <section className='max-w-5xl w-full mx-auto p-6 space-y-6'>
            <RoomBanner room={room} />
            <div className='flex md:flex-row flex-col gap-6'>
                <RoomSidebar room={room} isAdmin={isAdmin} />
                <main className='flex-1 h-full space-y-4'>
                    <AnnouncementForm roomId={params.id} />
                    <AnnouncementBlock announcements={room?.announcements} teacher={room?.teacher} />
                </main>
            </div>
        </section>
    )
}

export default SingleRoom