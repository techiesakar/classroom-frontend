import React, { Suspense } from 'react'
import { PeopleLists } from './_components/people-lists'
import { currentUser, getItems } from '@/app/action'
import { SingleUserListSkeleton, UserListSkeletons } from '@/components/skeleton/user-list-skeleton'

type ParamsType = {
    params: {
        id: string
    }
}

const People = async ({ params }: ParamsType) => {

    const user = await currentUser()
    const room = await getItems(`/room/${params.id}`)
    const isAdmin = room?.teacher?.id == user?.sub

    return (
        <div className='p-6 border border-gray-200 rounded-xl  space-y-6'>
            {!isAdmin &&
                <Suspense fallback={<SingleUserListSkeleton />}>
                    <PeopleLists title="Teacher" teacher={room?.teacher} />
                </Suspense>
            }
            <Suspense fallback={<UserListSkeletons />}>
                <PeopleLists title={isAdmin ? "Students" : "Classmates"} students={room?.students} showTotal={true} />
            </Suspense>
        </div>
    )
}

export default People