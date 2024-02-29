"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { AccountDefaultValues, AccountFormSchema } from "@/schema/account-schema"

export const AccountForm = () => {
    const form = useForm({
        resolver: zodResolver(AccountFormSchema),
        defaultValues: {
            ...AccountDefaultValues
        }
    })
    return (
        <form>

        </form>
    )
}
