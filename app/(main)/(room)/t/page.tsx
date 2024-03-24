import { RoomGrid } from '@/components/page-components/homepage/room-grid'
import { GridSkeleton } from '@/components/skeleton/grid-skeleton'
import React, { Suspense } from 'react'

const MyTeachings = () => {
    return (
        <div className="w-full">
            <Suspense fallback={<GridSkeleton />}>
                <RoomGrid url="/room/views?type=teacher" />
            </Suspense>
        </div>
    )
}

export default MyTeachings