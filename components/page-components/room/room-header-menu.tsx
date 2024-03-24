"use client"
import { usePathname, useRouter } from "next/navigation"
import { menuData } from "./room-header-data"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type PropsType = {
  role: string, roomId: string
}

export const RoomHeaderMenu = ({ role, roomId }: PropsType) => {
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
          <Button key={item.label} variant="ghost" onClick={() => router.push(`/c/${roomId}/${item.path}`)} className={cn("cursor-pointer block capitalize", (isHomePath && item.path == "" || childPath) ? "text-indigo-500" : "")}>{item.label}</Button>
        )
      })}
    </div>
  )
}
