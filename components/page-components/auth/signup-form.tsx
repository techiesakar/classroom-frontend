"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { useState } from "react"

import { register } from "@/app/action"

import { RegisterFormFields, RegisterFormType, registerFormSchema } from "@/schema/sign-in-schema"

import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Button } from "@/components/ui/button"
import { useForm } from 'react-hook-form'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { FormError } from "@/components/form-error"
import { FormSuccess } from "@/components/form-success"
import RiseLoader from "react-spinners/RiseLoader"
import { useRouter } from "next/navigation"

export const SignUpForm = () => {
    const router = useRouter()
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const form = useForm<RegisterFormType>({
        resolver: zodResolver(registerFormSchema),
        defaultValues: {
            name: "",
            username: "",
            password: "",
            confirmPassword: ""
        }
    })

    const onSubmit = async (values: RegisterFormType) => {
        setLoading(true)
        const result = await register(values)
        if (result?.success) {
            setError("")
            router.push("/signin")
            setSuccess(result.success)
        }
        if (result?.error) {
            setSuccess("")
            setError(result.error)
        }
        setLoading(false)
    }


    return (
        <div className="space-y-5 bg-white p-14 rounded-xl">
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
                                    <FormItem className="space-y-1.5">
                                        <Label>{item.label}</Label>
                                        <FormMessage className="text-xs font-light  block" />
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
                    {loading ? <div className="flex items-center justify-center"><RiseLoader size={10} color="#36d7b7" /></div>
                        :
                        <Button type="submit" className="bg-indigo-600  w-full hover:bg-indigo-500">Sign Up</Button>
                    }
                </form>
            </Form>
        </div>
    )
}
