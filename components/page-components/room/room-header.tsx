import { Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { RoomHeaderMenu } from './room-header-menu'

type PropsType = {
    role: string,
    roomId: string,
}

export const RoomHeader = ({ role, roomId }: PropsType) => {
    return (
        <header className='flex flex-wrap items-center justify-between p-0.5  border rounded'>
            <div><RoomHeaderMenu role={role} roomId={roomId} /></div>
            <div className='md:block hidden'>
                <Button
                    className="hover:bg-slate-100 rounded-full transition-all p-3 size-12 flex items-center justify-center"
                    variant="ghost"                >
                    <Settings className="text-slate-600 size-6" />
                </Button>
            </div>
        </header>
    )
}
