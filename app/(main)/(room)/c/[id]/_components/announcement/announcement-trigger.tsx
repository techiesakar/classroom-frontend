import Image from "next/image"
import { Card } from "@/components/ui/card"

type PropsType = {
    setClicked: React.Dispatch<React.SetStateAction<boolean>>
}

export const AnnouncementTrigger = ({ setClicked }: PropsType) => {
    return (
        <Card onClick={() => setClicked(true)} className='w-full flex items-center p-3 cursor-pointer transition-all bg-gray-50 hover:bg-gray-100'>
            <div className='size-12 cursor-pointer relative flex p-0.5 items-center justify-center'>
                <Image
                    src="https://github.com/shadcn.png"
                    width={40}
                    height={40}
                    className='rounded-full size-9'
                    alt='circle'
                />
            </div>
            <div className='text-xs text-gray-500 ml-3 hover:text-gray-700'>Announce something to your class</div>
        </Card>
    )
}
