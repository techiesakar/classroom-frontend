"use client"
import { useState } from 'react'
import { Card, CardFooter, CardHeader } from '@/components/ui/card'
import { RoomCodeActionCta } from './room-code-action-cta'
import { TRoom } from '@/lib/types'
import MoonLoader from "react-spinners/MoonLoader"


type PropsType = {
    room: TRoom,
    isAdmin: boolean
}

export const RoomSidebar = async ({ room, isAdmin }: PropsType) => {
    const [loading, setLoading] = useState(false)
    return (
        <aside className='md:w-60 w-full'>
            <Card >
                <CardHeader className='px-3 pb-3 '>
                    <div className='flex justify-between items-center'>
                        <div className='text-sm text-gray-600 font-medium'>Class Code</div>
                        <RoomCodeActionCta roomId={room?.id} inviteCode={room?.inviteCode} isAdmin={isAdmin} setLoading={setLoading} />
                    </div>
                </CardHeader>
                <CardFooter className='px-3'>

                    <div className='text-indigo-500  font-medium text-xl'>
                        {loading ?
                            <MoonLoader color="#1a57e5" size={20} />
                            : room?.inviteCode}
                    </div>

                </CardFooter>
            </Card>
        </aside>
    )
}
