import { ClassGrid } from '@/components/page-components/homepage/class-grid'
import { GridSkeleton } from '@/components/skeleton/grid-skeleton'
import React, { Suspense } from 'react'

const MyTeachings = () => {
    return (
        <div className="w-full">
            <Suspense fallback={<GridSkeleton />}>
                <ClassGrid url="/class/views?type=teacher" />
            </Suspense>
        </div>
    )
}

export default MyTeachings