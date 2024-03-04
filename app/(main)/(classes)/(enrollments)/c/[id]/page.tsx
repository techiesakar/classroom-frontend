import { fetchData } from '@/app/action'
import React from 'react'

type PropsType = {
    params: {
        id: string
    }
}

const SingleEnrollment = async ({ params }: PropsType) => {
    const room = await fetchData(`/class/${params.id}`)

    return (
        <div>{room?.name}</div>
    )
}

export default SingleEnrollment