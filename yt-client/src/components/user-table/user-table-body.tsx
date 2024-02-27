import { Table } from "../table";
import UserBodyRow from "./user-body-row";
import { useAppContext } from "@/hooks/useAppContext";
import { useUserTable } from "./useUserTable";

function UserTableBody() {
    const { users } = useAppContext()
    const { isLoading } = useUserTable()

    return (
        <Table.Body
            emptyMessage="Not users found"
            isEmpty={!users.length && !isLoading}
            isLoading={isLoading}
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
