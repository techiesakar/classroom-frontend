"use client"
import * as z from "zod"

import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import useEscapeKeyPress from "@/hooks/useEscape"
import { AnnouncementTrigger } from "./announcement-trigger"
import { usePost } from "@/hooks/usePost"
import { AnnouncementFormSchema, AnnouncementFormType, AnnouncementInitialValues } from "@/schema/announcement-schema"

type PropsType = {
    roomId: string
}

export const AnnouncementForm = ({ roomId }: PropsType) => {

    const [clicked, setClicked] = useState(false)

    useEscapeKeyPress(() => {
        setClicked(false)
    })

    const { onSubmit } = usePost(`/announcement/${roomId}/create`, {
        type: "post",
        showToast: true
    })

    const form = useForm<AnnouncementFormType>({
        resolver: zodResolver(AnnouncementFormSchema),
        mode: 'onChange',
        defaultValues: {
            ...AnnouncementInitialValues
        }
    })



    const { isDirty, isValid, isSubmitSuccessful, } = form.formState

    useEffect(() => {
        form.reset()
        setClicked(false)
    }, [isSubmitSuccessful])

    if (clicked) {
        return (
            <Card className='w-full  p-3'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <Label>Title</Label>
                                    <FormControl>
                                        <Input {...field} placeholder='Enter title' />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <Label>Description</Label>
                                    <FormControl>
                                        <Textarea {...field} placeholder="Type your message here." />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <div className="flex  justify-end items-center gap-3">
                            <Button onClick={() => setClicked(false)} variant="ghost" type="button">Cancel</Button>
                            <Button disabled={!isDirty || !isValid} className="bg-indigo-600 hover:bg-indigo-500" type="submit">Submit</Button>
                        </div>
                    </form>
                </Form>
            </Card>
        )
    }
    else return <AnnouncementTrigger setClicked={setClicked} />


}
