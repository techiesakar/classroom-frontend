import { fetchData } from '@/app/action'

type PropsType = {
    params: {
        id: string
    }
}

const SingleTeaching = async ({ params }: PropsType) => {
    const room = await fetchData(`/class/${params.id}`)

    return (
        <div>{room?.name}</div>
    )
}

export default SingleTeaching