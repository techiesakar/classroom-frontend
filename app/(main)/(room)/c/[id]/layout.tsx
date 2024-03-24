import React from 'react'
import { currentUser, getItems } from '@/app/action'
import { RoomHeader } from '@/components/page-components/room/room-header'

type PropsType = {
    params: {
        id: string
    },
    children: React.ReactNode
}
const SingleRoomLayout = async ({ children, params }: PropsType) => {
    const { sub } = await currentUser()
    const room = await getItems(`/room/${params.id}`)
    const role = (sub == room?.teacher?.id ? "teacher" : "student")

    return (
        <div className='space-y-4'>
            <RoomHeader role={role} roomId={params?.id} />
            {children}
        </div>
    )
}

export default SingleRoomLayout