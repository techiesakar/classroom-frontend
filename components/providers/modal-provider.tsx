"use client"
import React, { useEffect, useState } from 'react'
import { CreateRoomModal } from '@/components/modals/create-room-modal'
import { JoinRoomModal } from '@/components/modals/join-room-modal'

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false)
    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }
    return (
        <>
            <CreateRoomModal />
            <JoinRoomModal />
        </>
    )
}

