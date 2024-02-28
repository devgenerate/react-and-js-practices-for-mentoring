import { makeAutoObservable } from 'mobx'

import { UserStoreType } from "@/modules/store/domain/user-store";
import { User } from "@/modules/user/domain/user";

type UserStoreData = {
    users: Map<User['id'], User>
    isLoading: boolean
}

export class UserStore implements UserStoreType {
    private readonly data: UserStoreData = {
        users: new Map(),
        isLoading: true
    }

    constructor() {
        makeAutoObservable(this)
    }

    load(users: User[]): void {
        users.forEach((user) => {
            this.data.users.set(user.id, user)
        })

        this.data.isLoading = false
    }

    updateUserEmailById(id: User['id'], email: User['email']): void {
        const user: User = { ...this.data.users.get(id)!, email }
        this.data.users.set(id, user)
    }

    get users(): User[] {
        return [...this.data.users.values()]
    }

    get isLoading(): boolean {
        return this.data.isLoading
    }
}
