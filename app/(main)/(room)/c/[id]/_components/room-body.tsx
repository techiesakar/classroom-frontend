import { Card } from '@/components/ui/card'

const RoomBody = () => {
    return (
        <main className='flex-1 h-full min-h-40'>
            <Card className='w-full min-h-32 flex items-center justify-center flex-col'>
                <span className='italic text-red-500 font-light'>We are under development</span>
            </Card>
        </main>
    )
}

export default RoomBody