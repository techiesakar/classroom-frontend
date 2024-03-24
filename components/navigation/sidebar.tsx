import React from 'react'
import { SidebarScrollArea } from './scroll-area'
import { getItems } from '@/app/action'

export const Sidebar = async () => {
    const classesTeach = await getItems("/room/views?type=teacher")
    const enrolledClasses = await getItems("/room/views?type=student")

    return (
        <aside className='flex flex-col bg-white h-screen lg:left-0  -left-full overflow-x-hidden overflow-y-auto z-40 fixed'>
            <div className='h-header shrink-0'></div>
            <div className='min-h-0 overflow-hidden flex-1 w-sidebar'>
                <SidebarScrollArea enrolledClasses={enrolledClasses} classesTeach={classesTeach} />
            </div>
        </aside>
    )
}
