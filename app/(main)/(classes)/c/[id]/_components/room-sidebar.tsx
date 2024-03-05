import { Card, CardFooter, CardHeader } from '@/components/ui/card'
import React from 'react'
import { RoomCodeActionCta } from './room-code-action-cta'
import { RoomType } from '@/lib/types'
import { getSession } from '@/app/action'

type PropsType = {
    room: RoomType
}

export const RoomSidebar = async ({ room }: PropsType) => {
    const { sub } = await getSession()
    const isAdmin = room?.teacher?.id === sub
    return (
        <aside className='md:w-60 w-full'>
            <Card >
                <CardHeader className='px-3 pb-3 '>
                    <div className='flex justify-between items-center'>
                        <div className='text-sm text-gray-600 font-medium'>Class Code</div>
                        <RoomCodeActionCta classId={room?.id} inviteCode={room?.inviteCode} isAdmin={isAdmin} />
                    </div>
                </CardHeader>
                <CardFooter className='px-3'>
                    <div className='text-indigo-500 font-medium text-xl'>{room?.inviteCode}</div>
                </CardFooter>
            </Card>
        </aside>
    )
}
