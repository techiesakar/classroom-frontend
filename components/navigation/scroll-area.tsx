"use client"
import * as React from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
import { ArchiveRestore, Calendar, ChevronDown, GraduationCap, Home, Settings, Users } from "lucide-react"
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"

const data = [
    {
        id: "1",
        name: "JavaScript"
    },
    {
        id: "2",
        name: "Web Development"
    }
]

export const items = [

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
        options: data,
    },
    {
        id: "4",
        label: "Enrolled",
        icon: GraduationCap,
        options: data
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

export function ScrollAreaDemo() {
    return (
        <ScrollArea className="h-full w-full  border">
            <div className="py-4 pr-2 flex flex-col items-start">
                {items.map((item) => {
                    return (

                        <NavItem key={item.id} id={item.id} label={item.label} icon={item.icon} options={item?.options} />


                    )
                }
                )}
            </div>
        </ScrollArea>
    )
}

type PropsType = {
    id: string,
    label: string,
    icon: any,
    options?: any
}
export const NavItem = ({ id, label, icon, options }: PropsType) => {
    const Icon = icon
    return (
        <div className="w-full">
            {label == "Teaching" && <Separator className="my-2" />}
            <div className="pl-6  cursor-pointer  border-gray-200 transition-all ease-in duration-100 hover:bg-slate-100 rounded-r-full  text-slate-600 font-medium text-sm flex items-center leading-10 py-0.5">
                {options &&
                    <ChevronDown className="size-4 -ml-4 " />
                }
                <div className="p-1">
                    <Icon className=" size-5" />
                </div>
                <div className="ml-3">{label}</div>
            </div >
            {options && <Separator className="my-2" />}
        </div>
    )
}
