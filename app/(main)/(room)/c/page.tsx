import { Suspense } from 'react'
import { RoomGrid } from '@/components/page-components/homepage/room-grid'
import { GridSkeleton } from '@/components/skeleton/grid-skeleton'

const AllRooms = () => {
    return (
        <div className="w-full">
            <Suspense fallback={<GridSkeleton />}>
                <RoomGrid url="/room/views?type=student" />
            </Suspense>
        </div>
    )
}

export default AllRooms