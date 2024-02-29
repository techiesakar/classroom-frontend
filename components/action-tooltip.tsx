import { Button } from "@/components/ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import React from "react"

type PropsType = {
    label: string,
    children: React.ReactNode,
    align?: "start" | "end" | "center",
    side?: "right" | "top" | "right" | "bottom"
}

export function ActionToolTip({ label, children, side, align }: PropsType) {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={200}>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent className="text-xs bg-slate-800/90 text-white" side={side} align={align}>
                    {label}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
)
}
