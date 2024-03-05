import { z } from "zod"

const envVariables = z.object({
    NEXT_PUBLIC_API_URL: z.string(),
    NEXT_PUBLIC_HOST_URL: z.string(),
    NEXT_PUBLIC_ACCESS_TOKEN_SECRET: z.string()
})

envVariables.safeParse(process.env)

declare global {
    namespace NodeJS {
        interface ProcessEnv extends z.infer<typeof envVariables> { }
    }
}


export const HOST_URL = process.env.NEXT_PUBLIC_HOST_URL
