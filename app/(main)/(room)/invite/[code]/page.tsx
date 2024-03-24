import { submitPost } from "@/app/action";
import { redirect } from "next/navigation";


interface InviteCodeParams {
    params: {
        code: string
    }
}

const InviteCodePage = async ({ params }: InviteCodeParams) => {

    if (!params.code) {
        return redirect("/")
    }

    const response = await submitPost(`/room/${params.code}/join`, {}, "patch")
    if (response?.data?.id) {
        return redirect(`/c/${response?.data?.id}`)
    }
    return redirect("/")

}

export default InviteCodePage