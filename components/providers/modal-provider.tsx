"use client"
import React, { useEffect, useState } from 'react'
import { CreateClassModal } from '@/components/modals/create-class-modal'
import { JoinClassModal } from '../modals/join-class-modal'

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
            <CreateClassModal />
            <JoinClassModal />
        </>
    )
}

