import { PropsWithChildren, createContext, useState } from "react";

import { AppContextType } from "@/modules/ui/domain/app-context";
import { User } from "@/modules/user/domain/user";

export const AppContext = createContext<AppContextType>({} as AppContextType)

export function AppContextProvider({ children }: PropsWithChildren) {
    const [users, setUsers] = useState<Map<User['id'], User>>(new Map())

    const onUpdateUserEmailById = (userId: User['id'], email: User['email']) => {
        const newUser = {
            ...users.get(userId)!,
            email
        }

        setUsers((currentUsers) => {
            const newUsers = structuredClone(currentUsers)
            newUsers.set(userId, newUser)
            return newUsers
        })
    }

    const loadUsers = (users: User[]) => {
        const newUsers = new Map(users.map(user => [user.id, user]))
        setUsers(newUsers)
    }

    const value = {
        users: Array.from(users.values()),
        onUpdateUserEmailById,
        loadUsers
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}
