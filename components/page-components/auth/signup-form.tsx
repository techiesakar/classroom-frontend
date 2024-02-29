"use client"
import { zodResolver } from "@hookform/resolvers/zod"

import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { Input } from "@/components/ui/input"
import { RegisterFormFields, RegisterFormType, registerFormSchema } from "@/schema/sign-in-schema"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useAuth } from "@/hooks/useAuth"
import { FormError } from "@/components/form-error"
import { FormSuccess } from "@/components/form-success"

export const SignUpForm = () => {
    const { onSubmit, success, error } = useAuth("/auth/register/")

    const form = useForm<RegisterFormType>({
        resolver: zodResolver(registerFormSchema),
        defaultValues: {
            name: "",
            username: "",
            password: ""
        }
    })

    return (
        <div className="space-y-4 bg-white p-14 rounded-xl">
            <div className="text-3xl font-semibold">Sign Up</div>
            <p className="text-sm">Already have account ? <Link href={"/signin"} className='text-xs text-blue-600'>Login</Link></p>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                    {RegisterFormFields.map((item) => {
                        return (
                            <FormField key={item.fieldId}
                                control={form.control}
                                name={item.fieldId as keyof typeof form.getValues}
                                render={({ field }) => (
                                    <FormItem className="space-y-1">
                                        <FormLabel>{item.label}</FormLabel>
                                        <FormControl>
                                            <Input type={item.type} {...field} placeholder={item.placeholder} className="text-xs" />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        )

                    })}

                    <FormError message={error || ""} />
                    <FormSuccess message={success || ""} />
                    <Button type="submit" className="bg-indigo-600 hover:bg-indigo-500">Sign Up</Button>
                </form>
            </Form>
        </div>
    )
}
