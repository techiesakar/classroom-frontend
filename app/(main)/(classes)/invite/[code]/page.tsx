import { redirect } from "next/navigation";
import { updatePost } from '@/app/action';


interface InviteCodeParams {
    params: {
        code: string
    }
}

const InviteCodePage = async ({ params }: InviteCodeParams) => {

    if (!params.code) {
        return redirect("/")
    }

    const response = await updatePost(`/class/${params.code}/join`, {})
    if (response?.data?.id) {
        return redirect(`/c/${response?.data?.id}`)
    }
    return redirect("/")

}

export default InviteCodePage