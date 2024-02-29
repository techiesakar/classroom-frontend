import { z } from "zod"

export const AccountFormSchema = z.object({
    name: z.string().min(3, {
        message: "Name must be atleast 3 character"
    }),
    username: z.string().email(),
    dob: z.string(),
    password: z.string().optional()
})

export const AccountDefaultValues = {
    name: "",
    username: "",
    bio: "",
    dob: "",
    password: ""
}

export const useAccountFields = () => {
    const accountFields = [
        {
            fieldId: "name",
            label: "Name",
            placeholder: "Your name",
            as: "input",
            type: "text",
            required: true,
            subtitle: "This is the name that will be displayed on your profile and in emails"
        },

        {
            fieldId: "username",
            label: "Email",
            placeholder: "Enter email",
            as: "input",
            type: "email",
            required: true,
            subtitle: "This is the email that will be displayed on your profile "
        },

        {
            fieldId: "bio",
            label: "Bio",
            placeholder: "Enter bio",
            as: "textarea",
            type: "input",
            required: false,
        },

        {
            fieldId: "dob",
            label: "Date of birth",
            placeholder: "Pick a date",
            as: "date",
            type: "date",
            required: true,
            subtitle: "Your date of birth is used to calculate your age."
        },

        {
            fieldId: "password",
            label: "Password",
            placeholder: "Enter password",
            as: "input",
            type: "password",
            required: true,
            subtitle: "Enter new password"
        }
    ]

    return accountFields
}