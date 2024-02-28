import { ChangeEvent } from "react";
import { observer } from "mobx-react-lite";

import { Input } from "@/components/ui/input"
import { Table } from "../table";
import { User } from "@/modules/user/domain/user";
import { useUserStore } from "@/hooks/useAppContext";

type EmailCellProps = {
    user: User
}

// eslint-disable-next-line react-refresh/only-export-components
function EmailCell({ user }: EmailCellProps) {
    const userStore = useUserStore()

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        userStore.updateUserEmailById(user.id, event.target.value)
    }

    return (
        <Table.Cell className="text-right">
            <Input
                type="email"
                placeholder="Email"
                onChange={handleEmailChange}
                value={user.email}
            />
        </Table.Cell>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export default observer(EmailCell);
