import { User } from "./user"

export type UserRepository = {
    getUsers(): Promise<User[]>
    updateName(id: number, name: string): Promise<void>
}
