import { Separator } from '@/components/ui/separator'
import { IUser } from '@/lib/types'
import Image from 'next/image'
import React from 'react'

type PropsType = {
    title: string,
    teacher?: IUser
    students?: IUser[],
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
                {students?.map((student: IUser) => {
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
                <div className='size-10 cursor-pointer border-green-600 relative flex p-0.5 items-center justify-center'>
                    <Image
                        src="/google-circle.svg"
                        width={36}
                        height={36}
                        alt='circle'
                        className='absolute'
                    />
                    <Image
                        src="https://github.com/shadcn.png"
                        width={26}
                        height={26}
                        className='rounded-full'
                        alt='circle'
                    />
                </div>

                <div className='text-sm'>
                    {name}
                </div>

            </div>
            <Separator className='last:bg-transparent' />
        </>
    )
}