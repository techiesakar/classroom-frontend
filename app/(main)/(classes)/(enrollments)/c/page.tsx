import { ClassGrid } from '@/components/page-components/homepage/class-grid'
import React, { Suspense } from 'react'

const MyEnrollments = () => {
    return (
        <div className="w-full">
            <Suspense fallback={<p>Loading feed...</p>}>
                <ClassGrid url="/class/views?type=student" />
            </Suspense>
        </div>
    )
}

export default MyEnrollments