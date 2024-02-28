import { useQuery, useReactiveVar } from "@apollo/client";
import { Table } from "../table";

import { GQLUserListData } from "@/modules/user/domain/user"
import { getUsers } from "@/queries/user.queries"
import UserBodyRow from "./user-body-row";
import { useEffect } from "react";
import { usersVar } from "@/config/apollo.config";

function UserTableBody() {
    const { data, loading } = useQuery<GQLUserListData>(getUsers, {
        fetchPolicy: 'network-only'
    })

    const users = useReactiveVar(usersVar)

    useEffect(() => {
        if (data?.Users) {
            usersVar(data.Users)
        }
    }, [data])

    return (
        <Table.Body
            emptyMessage="Not users found"
            isEmpty={!data && !loading}
            isLoading={loading}
        >
            {
                users.map((user) => (
                    <UserBodyRow key={user.id} user={user} />
                ))
            }
        </Table.Body>
    )
}

export default UserTableBody;
