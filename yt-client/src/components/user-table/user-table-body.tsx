import { useQuery } from "@apollo/client";
import { Table } from "../table";

import { GQLUserListData } from "@/modules/user/domain/user"
import { getUsers } from "@/queries/user.queries"
import UserBodyRow from "./user-body-row";

function UserTableBody() {
    const { data, loading } = useQuery<GQLUserListData>(getUsers, {
        fetchPolicy: 'network-only'
    })

    return (
        <Table.Body
            emptyMessage="Not users found"
            isEmpty={!data && !loading}
            isLoading={loading}
        >
            {
                (data || { Users: [] }).Users.map((user) => (
                    <UserBodyRow key={user.id} user={user} />
                ))
            }
        </Table.Body>
    )
}

export default UserTableBody;
