import { ChangeEvent } from "react";
import { Input } from "@/components/ui/input"
import { Table } from "../table";

import { User } from "@/modules/user/domain/user";
import { useAppContext } from "@/hooks/useAppContext";

type UserEmailCellProps = {
    id: User['id']
    email: User['email']
}


function UserEmailCell({ email, id }: UserEmailCellProps) {
    const { onUpdateUserEmailById } = useAppContext()

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        onUpdateUserEmailById(id, event.target.value)
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
