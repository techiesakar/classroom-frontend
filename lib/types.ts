export type TRoom = {
    id: string,
    name: string,
    subject: string,
    inviteCode: string,
    teacher: {
        id: string,
        name: string
    }
}

export type TUser = {
    id: string,
    name: string,
}