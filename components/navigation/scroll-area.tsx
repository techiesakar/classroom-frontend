"use client"
import * as React from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
import { ArchiveRestore, Calendar, GraduationCap, Home, Settings, Users } from "lucide-react"
import { NavItem } from "./nav-item"

interface PropsType {
    classesTeach: RoomType[],
    enrolledClasses: RoomType[],

}

export interface RoomType {
    id: string,
    name: string,
    subject: string,
    inviteCode: string,
    teacher: {
        id: string,
        name: string
    }
}


export function SidebarScrollArea({ enrolledClasses, classesTeach }: PropsType) {

    const items = [
        {
            id: "1",
            label: "Home",
            icon: Home,
        },
        {
            id: "2",
            label: "Calendar",
            icon: Calendar,
        },
        {
            id: "3",
            label: "Teaching",
            icon: Users,
            options: classesTeach,
        },
        {
            id: "4",
            label: "Enrolled",
            icon: GraduationCap,
            options: enrolledClasses
        }
        , {
            id: "5",
            label: "Archived classes",
            icon: ArchiveRestore,
        },
        {
            id: "6",
            label: "Settings",
            icon: Settings,
        },
    ]
    return (
        <ScrollArea className="h-full w-full  border">
            <div className="py-4 pr-2 flex flex-col items-start">
                {items.map((item, id: number) => {
                    return (
                        <NavItem key={item.id} id={id} label={item.label} icon={item.icon} options={item?.options} />
                    )
                }
                )}
            </div>
        </ScrollArea>
    )
}

