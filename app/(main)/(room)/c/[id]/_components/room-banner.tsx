import { Card, CardFooter } from '@/components/ui/card'
import { TRoom } from '@/lib/types'
import Image from 'next/image'

type PropsType = {
    room: TRoom
}
export const RoomBanner = ({ room }: PropsType) => {
    return (
        <Card className='rounded-xl overflow-hidden relative w-full lg:h-60 md:h-56 h-36 flex'>
            <Image
                src={"https://www.gstatic.com/classroom/themes/img_code.jpg"}
                fill
                alt='Banner'
                className='w-full absolute inset-0 z-0'
            />
            <CardFooter className='relative z-50 self-end'>
                <div className='lg:text-4xl sm:text-3xl text-2xl text-white font-medium'>{room?.name}</div>
            </CardFooter>
        </Card>
    )
}
