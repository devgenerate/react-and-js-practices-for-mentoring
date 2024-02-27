import { useEffect } from "react";
import { useQuery } from "@apollo/client";

import { useAppContext } from "@/hooks/useAppContext";
import { GQLUserListData } from "@/modules/user/domain/user";

import { getUsers } from "@/queries/user.queries";

export function useUserTable() {
    const { data, loading } = useQuery<GQLUserListData>(getUsers, {
        fetchPolicy: 'network-only'
    })

    const { loadUsers } = useAppContext()

    useEffect(() => {
        if (data?.Users) {
            loadUsers(data.Users)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    return { isLoading: loading }
}
