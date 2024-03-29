"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"

import { LoginFormFields, LoginFormType, loginFormSchema } from "@/schema/sign-in-schema"

import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Button } from "@/components/ui/button"
import { useForm } from 'react-hook-form'
import { Input } from "@/components/ui/input"
import { FormError } from "@/components/form-error"
import { FormSuccess } from "@/components/form-success"
import RiseLoader from "react-spinners/RiseLoader"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/hooks/useAuth"

export const SignInForm = () => {

    const { error, loading, onSubmit, success } = useAuth()
    const form = useForm<LoginFormType>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            username: "",
            password: "",
        }
    })

    return (
        <div className="space-y-4 bg-white p-14 rounded-xl">
            <div className="text-3xl font-semibold">Sign in</div>
            <p className="text-sm">New user ? <Link href={"/signup"} className='text-xs text-blue-600'>Create an account</Link></p>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    {LoginFormFields.map((item) => {
                        return (
                            <FormField key={item.fieldId}
                                control={form.control}
                                name={item.fieldId as keyof typeof form.getValues}
                                render={({ field }) => (
                                    <FormItem className="space-y-1.5">
                                        <Label>{item.label}</Label>
                                        <FormControl>
                                            <Input type={item.type} {...field} placeholder={item.placeholder} className="text-xs" />
                                        </FormControl>
                                        <FormMessage className="text-xs font-light" />
                                    </FormItem>
                                )}
                            />
                        )
                    })}
                    <FormError message={error || ""} />
                    <FormSuccess message={success || ""} />
                    {loading ? <div className="flex items-center justify-center"><RiseLoader size={10} color="#36d7b7" /></div>
                        :
                        <Button type="submit" className="bg-indigo-600  w-full hover:bg-indigo-500">Sign In</Button>
                    }
                    <p className="text-sm"> <Link href={"/signup"} className='text-xs text-blue-600'>Forget Password ?</Link></p>

                </form>
            </Form>
        </div>
    )
}
