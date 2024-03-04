import Image from 'next/image'
import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='relative h-full w-full bg-black/40'
        >
            <div className='absolute h-full -z-10 w-full '>
                {/* <Image quality={60} src={"/bg-cover.jpg"} fill alt='background image'
                    className='w-full object-cover '
                /> */}
            </div>

            <div className='w-full h-full  flex items-center max-w-[1280px] mx-auto'>
                <div className='grid grid-cols-12 w-full justify-center px-6'>
                    <div className='lg:col-span-4  md:col-span-6 col-span-12  lg:col-start-2 md:flex hidden flex-col justify-center'>
                        <Image
                            src={"/logo.svg"}
                            width={80}
                            height={80}

                            alt='site logo'
                        />
                        <p className='text-white font-light text-2xl'>Welcome to classroom...</p>
                    </div>
                    <div className='rounded  md:col-span-6 col-span-12 lg:col-span-4 lg:col-end-11'>
                        {children}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default AuthLayout