import React from 'react'
import { currentUser } from '@/app/action'
import { ClassHeader } from '@/components/page-components/class/class-header'
import { getItems } from '@/lib/api'

type PropsType = {
    params: {
        id: string
    },
    children: React.ReactNode
}
const SingleClassLayout = async ({ children, params }: PropsType) => {
    const { sub } = await currentUser()
    const room = await getItems(`/class/${params.id}`)
    const role = (sub == room?.teacher?.id ? "teacher" : "student")

    return (
        <div className='space-y-4'>
            <ClassHeader role={role} classId={params?.id} />
            {children}
        </div>
    )
}

export default SingleClassLayout