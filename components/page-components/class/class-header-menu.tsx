"use client"

import { usePathname, useRouter } from "next/navigation"
import { menuData } from "./class-header-data"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type PropsType = {
  role: string, classId: string
}



export const ClassHeaderMenu = ({ role, classId }: PropsType) => {
  const router = useRouter()
  const pathname = usePathname()
  const currentLabel = pathname.split("/").pop()
  const isHomePath = pathname.split("/")[1] === "c" && (currentLabel === undefined || currentLabel.length > 10)

  return (
    <div className=" flex ">
      {menuData.map((item) => {

        const childPath = currentLabel == item.label
        if (item.label === "grade" && role !== "teacher") {
          return
        }
        return (
          <Button key={item.label} variant="ghost" onClick={() => router.push(`/c/${classId}/${item.path}`)} className={cn("cursor-pointer block capitalize", (isHomePath && item.path == "" || childPath) ? "text-indigo-500" : "")}>{item.label}</Button>
        )
      })}
    </div>
  )
}
