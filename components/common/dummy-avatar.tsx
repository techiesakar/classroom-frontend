import Image from 'next/image'

export const DummyAvatar = () => {
    return (
        <div className='size-10 cursor-pointer border-green-600 relative flex p-0.5 items-center justify-center'>
            <Image
                src="/google-circle.svg"
                width={36}
                height={36}
                alt='circle'
                className='absolute'
            />
            <Image
                src="https://github.com/shadcn.png"
                width={26}
                height={26}
                className='rounded-full'
                alt='circle'
            />
        </div>
    )
}
