import { DummyAvatar } from '@/components/common/dummy-avatar'
import { Separator } from '@/components/ui/separator'
import { TUser } from '@/lib/types'
import Image from 'next/image'

type PropsType = {
    title: string,
    teacher?: TUser
    students?: TUser[],
    showTotal?: boolean
}

export const PeopleLists = ({ title, teacher, students, showTotal }: PropsType) => {
    return (
        <div className='space-y-4'>
            <div>
                <h2 className='text-indigo-500  flex items-center justify-between'>
                    <span className='text-2xl'>{title}</span>

                    {showTotal &&
                        <span className='text-xs font-medium'>{students?.length} students </span>
                    }
                </h2>
                <Separator className='mt-4 bg-indigo-500' />
            </div>

            <div className='space-y-3 mt-6'>
                {teacher &&
                    <PeopleItem name={teacher?.name
                    } />
                }
                {students?.map((student: TUser) => {
                    return <PeopleItem key={student.id} name={student.name} />
                })}
            </div>

        </div>
    )
}


export const PeopleItem = ({ name }: { name?: string }) => {
    return (
        <>
            <div className='capitalize flex items-center gap-x-3'>
                <DummyAvatar />

                <div className='text-sm'>
                    {name}
                </div>

            </div>
            <Separator className='last:bg-transparent' />
        </>
    )
}