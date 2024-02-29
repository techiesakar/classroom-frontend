"use client"
import { zodResolver } from "@hookform/resolvers/zod"

import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { Input } from "@/components/ui/input"
import { LoginFormFields, LoginFormType, loginFormSchema } from "@/schema/sign-in-schema"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FormError } from "@/components/form-error"
import { FormSuccess } from "@/components/form-success"

import { useAuth } from "@/hooks/useAuth"

export const SignInForm = () => {

    const { onSubmit, success, error } = useAuth("/auth/login/")

    const form = useForm<LoginFormType>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            username: "",
            password: ""
        }
    })


    return (
        <div className="space-y-4 bg-white p-14 rounded-xl">
            <div className="text-3xl font-semibold">Sign in</div>
            <p className="text-sm">New user ? <Link href={"/signup"} className='text-xs text-blue-600'>Create an account</Link></p>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                    {LoginFormFields.map((item) => {
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
                    <Button type="submit" className="bg-indigo-600 hover:bg-indigo-500">Sign In</Button>
                    <p className="text-sm"> <Link href={"/signup"} className='text-xs text-blue-600'>Forget Password ?</Link></p>

                </form>
            </Form>
        </div>
    )
}
