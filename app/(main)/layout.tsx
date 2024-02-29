import { Header } from '@/components/header/header'
import { Sidebar } from '@/components/navigation/sidebar'
import React from 'react'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='w-full h-full'>
            <Header />
            <Sidebar />
            <div className='flex'>
                <div className="left lg:w-sidebar shrink-0"></div>
                <div className="right flex-1 relative z-auto block min-h-full">
                    <div className='h-header w-full  overflow-hidden'></div>
                    <main className='p-4'>
                        {children}
                    </main>
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout