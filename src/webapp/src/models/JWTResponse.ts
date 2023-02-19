
export type JWTResponse = {
    username: string,
    password: string,
    email: string,
    accessToken: string,
    roles: string[]
}