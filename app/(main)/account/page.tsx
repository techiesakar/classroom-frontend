import { getSession } from '@/app/actions'
import { getCurrentUser } from '@/app/utils'
import { AccountForm } from '@/components/page-components/account/account-form'
import { BACKEND_URL } from '@/config/backend'
import axios from 'axios'
import React from 'react'

const AccountPage = async () => {

    // getCurrentUser()

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

    return (
        <section>
            <header>
                <h1>Profile</h1>
                <p>This is how others will see you on the site</p>
            </header>
            <AccountForm />
        </section>
    )
}

export default AccountPage