import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { observer } from 'mobx-react-lite'

import { Table } from "../table";
import { useUserStore } from "@/hooks/useAppContext";
import Row from "./row";
import { GQLUserListData } from "@/modules/user/domain/user";
import { getUsers } from "@/queries/user.queries";

// eslint-disable-next-line react-refresh/only-export-components
function Body() {
    const userStore = useUserStore()
    const { isLoading, users } = userStore

    const { data } = useQuery<GQLUserListData>(getUsers, {
        fetchPolicy: 'network-only'
    })

    useEffect(() => {
        if (data?.Users) {
            userStore.load(data.Users)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    return (
        <Table.Body isLoading={isLoading}>
            {
                users.map((user) => (
                    <Row key={user.id} user={user} />
                ))
            }
        </Table.Body>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export default observer(Body);
