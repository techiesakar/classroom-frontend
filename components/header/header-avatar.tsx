// "use client"
import React from 'react'
import Image from 'next/image'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { logout } from '@/app/action'

export const HeaderAvatar = () => {


    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className='size-10 cursor-pointer border-green-600 relative flex p-0.5 items-center justify-center'>
                    <Image
                        src="/google-circle.svg"
                        width={46}
                        height={46}
                        alt='circle'
                        className='absolute size-10'
                    />
                    <Image
                        src="https://github.com/shadcn.png"
                        width={36}
                        height={36}
                        className='rounded-full size-8'
                        alt='circle'
                    />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" >
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem className='cursor-pointer'>
                        Profile
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem className='cursor-pointer'>
                        Settings
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />
                <DropdownMenuItem className='cursor-pointer'>GitHub</DropdownMenuItem>
                <DropdownMenuItem className='cursor-pointer'>Support</DropdownMenuItem>
                <DropdownMenuSeparator />

                <DropdownMenuItem typeof='button'>
                    <form action={async () => {
                        'use server'
                        await logout()
                    }} className='w-full'>
                        <button className="font-medium flex justify-between leading-none py-2 w-full items-center">
                            Log out
                        </button>
                    </form>


                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>



    )
}
