import { USERS } from "../../../constants/users.constants";
import { User } from "../domain/user";
import { UserRepository } from "../domain/user-repository";


export class UserApi implements UserRepository {
    private users: Map<User['id'], User>

    constructor() {
        this.users = new Map(USERS.map((user) => [user.id, user]))
    }

    async getUsers(): Promise<User[]> {
        try {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve([...this.users.values()])
                }, 1500)
            })
        } catch (_) {}
    }

    async updateName(id: number, name: string): Promise<void> {
        try {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const currentUser = this.users.get(id)!
                    this.users.set(id, { ...currentUser, name })
                    resolve(null)
                }, 1500)
            })
        } catch (_) {
        }
    }
}
