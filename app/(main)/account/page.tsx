import { AccountForm } from '@/components/page-components/account/account-form'
const AccountPage = async () => {
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