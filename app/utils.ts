"use server"
import { BACKEND_URL } from '@/config/backend'
import axios from 'axios'
import { cache } from 'react'

export const getCurrentUser = cache(async () => {

    try {
        const user = await axios.get(`${BACKEND_URL + "/user/whoami"}`, {
            withCredentials: true
        })
        console.log(user)
    }
    catch (error) {
        console.log(error)
        console.log("User not found")
    }

})