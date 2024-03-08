import React from 'react'
import { Skeleton } from '../ui/skeleton'

export const SingleUserListSkeleton = () => {
    return (
        <div className='p-2 rounded-xl flex gap-x-4 justify-between items-center bg-slate-100 animate-pulse'>
            <Skeleton className='size-8 bg-gray-300 rounded-full' />
            <div className='flex-1 '>
                <Skeleton className='h-4 max-w-xs bg-gray-300 w-full' />
            </div>
        </div>
    )
}

export const UserListSkeletons = () => {
    return (
        <>
            <SingleUserListSkeleton />
            <SingleUserListSkeleton />
            <SingleUserListSkeleton />
            <SingleUserListSkeleton />
            <SingleUserListSkeleton />
        </>
    )
}
