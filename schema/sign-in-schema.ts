import { z } from "zod"

export const loginFormSchema = z.object({
    username: z.string().email({
        message: "Email address is not valid"
    }),
    password: z.string().min(6, {
        message: "Password must be atleast 6 characters"
    })
})

export const registerFormSchema = z.
    object({
        name: z.string().min(3, {
            message: "Name must be atleast 3 characters"
        }),
        username: z.string().email({
            message: "Email address is not valid"
        }),
        password: z.string().min(6, {
            message: "Password must be atleast 6 characters"
        }),
        confirmPassword: z.string().min(6, {
            message: "Confirm Password must matched"
        })
    }).refine((values) => values.password === values.confirmPassword, {
        message: "Confirm Password don't match",
        path: ["confirmPassword"]
    })

export type LoginFormType = z.infer<typeof loginFormSchema>
export type RegisterFormType = z.infer<typeof registerFormSchema>

export const LoginFormFields = [
    {
        fieldId: "username",
        label: "Email",
        placeholder: "Enter email",
        as: "input",
        type: "email",
        required: true
    },
    {
        fieldId: "password",
        label: "Password",
        placeholder: "Enter password",
        as: "input",
        type: "password",
        required: true
    }
]

export const RegisterFormFields = [

    {
        fieldId: "name",
        label: "Name",
        placeholder: "Enter Full Name",
        as: "input",
        type: "text",
        required: true
    },
    {
        fieldId: "username",
        label: "Email",
        placeholder: "Enter email",
        as: "input",
        type: "email",
        required: true
    },
    {
        fieldId: "password",
        label: "Password",
        placeholder: "Enter password",
        as: "input",
        type: "password",
        required: true
    },
    {
        fieldId: "confirmPassword",
        label: "Confirm Password",
        placeholder: "Confirm password",
        as: "input",
        type: "password",
        required: true
    }
]