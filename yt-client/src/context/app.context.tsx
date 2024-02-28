import { PropsWithChildren, createContext } from "react"

import { AppContextType } from "@/modules/ui/domain/app-context"
import { Store } from "@/store/store"

export const AppContext = createContext<AppContextType>({} as AppContextType)

const store = new Store()

export function AppContextProvider({ children }: PropsWithChildren) {
    return (
        <AppContext.Provider value={{ store }}>
            {children}
        </AppContext.Provider>
    )
}


