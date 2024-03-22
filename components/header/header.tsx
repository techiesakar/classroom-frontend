import { Menu } from 'lucide-react'
import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { HeaderAvatar } from './header-avatar'
import Link from 'next/link'
import { HeaderCta } from './header-cta'

export const Header = async () => {
    return (
        <header className='fixed top-0  bg-white border-b border-slate-200 w-full z-50'>
            <div className='px-4'>
                <div className=' flex items-center  justify-between'>
                    <Button className='hover:bg-slate-100 rounded-full transition-all p-3 size-12  flex items-center justify-center' variant="ghost">
                        <Menu className='text-slate-600' />
                    </Button>
                    <div className='flex items-center h-header'>
                        <Link href="/" className='font-medium flex gap-x-3 text-slate-500 hover:text-roomgreen ml-2 text-xl '>
                            <Image
                                src={"/logo.svg"}
                                width={26}
                                height={26}
                                alt='logo'

                            />   Classroom
                        </Link>
                    </div>
                    <div className='ml-auto space-x-2 flex items-center'>
                        <HeaderCta />
                        <HeaderAvatar />
                    </div>
                </div>
            </div>
        </header>
    )
}
