import { Suspense } from 'react'
import { ClassGrid } from '@/components/page-components/homepage/class-grid'
import { GridSkeleton } from '@/components/skeleton/grid-skeleton'

const AllRooms = () => {
    return (
        <div className="w-full">
            <Suspense fallback={<GridSkeleton />}>
                <ClassGrid url="/class/views?type=student" />
            </Suspense>
        </div>
    )
}

export default AllRooms