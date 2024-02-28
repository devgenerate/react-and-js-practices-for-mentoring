import { User } from "@/modules/user/domain/user"

export type UserStoreType = {
    isLoading: boolean
    users: User[]
    load(users: User[]): void
    updateUserEmailById(id: User['id'], email: User['email']): void
}
