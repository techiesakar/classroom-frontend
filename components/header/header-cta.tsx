"use client"
import React, { useState } from "react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useModal } from "@/hooks/modalStore";

export const HeaderCta = () => {
    const { onOpen } = useModal()
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    className="hover:bg-slate-100 rounded-full transition-all p-3 size-12 flex items-center justify-center"
                    variant="ghost"
                >
                    <Plus className="text-slate-600" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-fit p-2 absolute left-[-88px]">
                <div className=" flex flex-col text-sm">
                    <Button onClick={() => onOpen("joinRoom")}
                        variant="ghost"
                        className="font-medium leading-none  w-full flex items-center justify-start p-3"
                    >
                        Join Class
                    </Button>
                    <Button onClick={() => onOpen("createRoom")}
                        variant="ghost"
                        className="font-medium leading-none w-full flex items-center justify-start p-3"
                    >
                        Create Class
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    );
};
