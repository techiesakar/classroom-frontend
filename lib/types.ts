export interface IRoom {
    id: string,
    name: string,
    subject: string,
    inviteCode: string,
    teacher: {
        id: string,
        name: string
    }
}

export interface IUser {
    id: string,
    name: string,
}