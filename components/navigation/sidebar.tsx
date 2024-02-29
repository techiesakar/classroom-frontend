import React from 'react'
import { ScrollAreaDemo } from './scroll-area'

export const Sidebar = () => {
    return (
        <aside className='flex flex-col bg-white h-screen lg:left-0  -left-full overflow-x-hidden overflow-y-auto z-40 fixed'>
            <div className='h-header shrink-0'></div>
            <div className='min-h-0 overflow-hidden flex-1 w-sidebar'>
                <ScrollAreaDemo />
            </div>
        </aside>
    )
}
