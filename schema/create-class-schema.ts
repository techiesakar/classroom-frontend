import { z } from "zod"

export const classFormSchema = z.object({
    name: z.string().min(3, {
        message: "Class Room must be atleast 3 characters"
    }),
    subject: z.string().min(3, {
        message: "Subject must be atleast 3 characters"
    })
})

export type ClassFormType = z.infer<typeof classFormSchema>

export const classFormInitialValues = {
    name: "",
    subject: ""
}
export const classFormFields = [
    {
        fieldId: "name",
        placeholder: "Class Name",
        as: "input",
        type: "text",
        required: true
    },

    {
        fieldId: "subject",
        placeholder: "Subject",
        as: "input",
        type: "text",
        required: true
    },
]