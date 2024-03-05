import { Card, CardFooter, CardHeader } from '@/components/ui/card'
import React from 'react'
import { RoomCodeActionCta } from './room-code-action-cta'

type PropsType = {
    classId: string,
    inviteCode: string
}

export const RoomSidebar = ({ classId, inviteCode }: PropsType) => {

    return (
        <aside className='w-60'>
            <Card >
                <CardHeader className='px-3 pb-3 '>
                    <div className='flex justify-between items-center'>
                        <div className='text-sm text-gray-600 font-medium'>Class Code</div>
                        <RoomCodeActionCta classId={classId} inviteCode={inviteCode} />
                    </div>
                </CardHeader>
                <CardFooter className='px-3'>
                    <div className='text-indigo-500 font-medium text-xl'>{inviteCode}</div>
                </CardFooter>
            </Card>
        </aside>
    )
}
