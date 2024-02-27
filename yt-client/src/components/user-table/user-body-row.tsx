import { Table } from "../table";

import { User } from "@/modules/user/domain/user";
import UserEmailCell from "./user-email-cell";

type UserBodyRowProps = {
    user: User
}

function UserBodyRow({ user }: UserBodyRowProps) {
    return (
        <Table.Row key={user.id}>
            <Table.Cell className="font-medium">
                {user.name}
            </Table.Cell>
            <UserEmailCell id={user.id} email={user.email} />
            <Table.Cell>{user.website}</Table.Cell>
            <Table.Cell className="text-right">{user.company.name}</Table.Cell>
        </Table.Row>
    );
}

export default UserBodyRow;
