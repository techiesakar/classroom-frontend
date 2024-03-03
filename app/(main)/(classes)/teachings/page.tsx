import { ClassGrid } from '@/components/page-components/homepage/class-grid'
import React, { Suspense } from 'react'

const MyTeachings = () => {
    return (
        <div className="w-full">
            <Suspense fallback={<p>Loading feed...</p>}>
                <ClassGrid url="/class/views?type=teacher" />
            </Suspense>
        </div>
    )
}

export default MyTeachings