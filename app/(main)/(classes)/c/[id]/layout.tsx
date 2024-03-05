import React from 'react'
import { getSession } from '@/app/action'
import { ClassHeader } from '@/components/page-components/class/class-header'
import { getItems } from '@/lib/api'

type PropsType = {
    params: {
        id: string
    },
    children: React.ReactNode
}
const SingleClassLayout = async ({ children, params }: PropsType) => {
    const { sub } = await getSession()
    const room = await getItems(`/class/${params.id}`)
    const role = (sub == room?.teacher.id ? "teacher" : "student")

    return (
        <>
            <ClassHeader role={role} classId={params?.id} />
            {children}
        </>
    )
}

export default SingleClassLayout