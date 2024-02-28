import { User } from "./user"

export type UserRepository = {
    getUsers(): Promise<User[]>
}
