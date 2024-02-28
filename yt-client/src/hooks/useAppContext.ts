import { useContext } from "react";

import { AppContext } from "@/context/app.context";

const useAppContext = () => useContext(AppContext)

const useStore = () => useAppContext().store

export const useUserStore = () => useStore().user
