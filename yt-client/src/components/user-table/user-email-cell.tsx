import { Input } from "@/components/ui/input"
import { Table } from "../table";

import { ChangeEvent, useState } from "react";

type UserEmailCellProps = {
    value: string
}


function UserEmailCell({ value }: UserEmailCellProps) {
    const [email, setEmail] = useState(value)

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
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
