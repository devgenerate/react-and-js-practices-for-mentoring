import { User } from "@/modules/user/domain/user"

export type AppContextType = {
    users: User[]
    loadUsers(users: User[]): void
    onUpdateUserEmailById(userId: User['id'], email: User['email']): void
}
