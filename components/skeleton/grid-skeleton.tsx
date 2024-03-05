import React from 'react'
import { Skeleton } from '../ui/skeleton'

export const GridSkeleton = () => {
    return (
        <div className='grid xl:grid-cols-4 gap-6 p-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
        </div>
    )
}

export const CardSkeleton = () => {
    return (
        <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-full rounded-xl" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
            </div>
        </div>
    )
}
