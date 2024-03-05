import React from 'react'
import { ClassHeaderMenu } from './class-header-menu'
import { Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'

type PropsType = {
    role: string,
    classId: string,
}

export const ClassHeader = ({ role, classId }: PropsType) => {
    return (
        <header className='flex items-center justify-between p-0.5  border rounded'>
            <div><ClassHeaderMenu role={role} classId={classId} /></div>
            <div>
                <Button
                    className="hover:bg-slate-100 rounded-full transition-all p-3 size-12 flex items-center justify-center"
                    variant="ghost"                >
                    <Settings className="text-slate-600 size-6" />
                </Button>
            </div>
        </header>
    )
}
