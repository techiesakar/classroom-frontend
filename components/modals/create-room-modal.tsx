import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useModal } from "@/hooks/modalStore"
import { classFormFields, classFormInitialValues, classFormSchema } from "@/schema/create-class-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form"

import { usePost } from "@/hooks/usePost"

export function CreateRoomModal() {
    const { isOpen, onClose, type } = useModal()
    const isModalOpen = isOpen && type === "createRoom"
    const { onSubmit } = usePost("/room/create", {
        type: "post",
        showToast: false
    })

    const form = useForm({
        resolver: zodResolver(classFormSchema),
        defaultValues: { ...classFormInitialValues }
    })

    return (
        <Dialog open={isModalOpen} onOpenChange={() => {
            onClose()
            form.reset()
        }}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create Class</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                        {classFormFields.map((item) => {
                            return (
                                <FormField key={item.fieldId}
                                    control={form.control}
                                    name={item.fieldId as keyof typeof form.getValues}
                                    render={({ field }) => (
                                        <FormItem className="space-y-2">
                                            <FormControl>
                                                <Input type={item.type} {...field} placeholder={item.placeholder} className="text-xs" />
                                            </FormControl>
                                            <FormMessage className="text-xs font-light" />
                                        </FormItem>
                                    )}

                                />
                            )
                        })}

                        <Button className="bg-indigo-600 hover:bg-indigo-500" type="submit">Create Class</Button>

                    </form>
                </Form>

            </DialogContent>
        </Dialog>
    )
}
