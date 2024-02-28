import { ChangeEvent } from "react";
import { useReactiveVar } from "@apollo/client";

import { Input } from "@/components/ui/input"
import { Table } from "../table";
import { usersVar } from "@/config/apollo.config";

type UserEmailCellProps = {
    email: string
    id: number
}


function UserEmailCell({ email, id }: UserEmailCellProps) {
    const users = useReactiveVar(usersVar)

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        const currentUsers = structuredClone(users)
        const userIndex = currentUsers.findIndex(user => user.id === id)
        currentUsers[userIndex] = {
            ...currentUsers[userIndex],
            email: event.target.value
        }
        usersVar(currentUsers)
    }

    return (
        <Table.Cell className="text-right">
            <Input
                type="email"
                placeholder="Email"
                onChange={handleEmailChange}
                value={email}
            />
        </Table.Cell>
    );
}

export default UserEmailCell;
