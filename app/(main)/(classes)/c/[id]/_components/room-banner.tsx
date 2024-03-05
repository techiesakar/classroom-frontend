import { Card, CardFooter } from '@/components/ui/card'
import { RoomType } from '@/lib/types'
import Image from 'next/image'

type PropsType = {
    room: RoomType
}
export const RoomBanner = ({ room }: PropsType) => {
    return (
        <Card className='rounded-xl overflow-hidden relative w-full h-60 flex'>
            <Image
                src={"https://www.gstatic.com/classroom/themes/img_code.jpg"}
                fill
                alt='Banner'
                className='w-full absolute inset-0 z-0'
            />
            <CardFooter className='relative z-50 self-end'>
                <div className='text-4xl text-white font-medium'>BCA</div>
            </CardFooter>
        </Card>
    )
}
