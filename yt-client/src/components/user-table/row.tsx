import { observer } from 'mobx-react-lite'

import { Table } from "../table";
import { User } from "@/modules/user/domain/user";
import EmailCell from './email-cell';

type RowProps = {
    user: User
}

const Row = observer(({ user }: RowProps) => {
    return (
        <Table.Row key={user.id}>
            <Table.Cell className="font-medium">
                {user.name}
            </Table.Cell>
            <EmailCell user={user} />
            <Table.Cell className="font-medium">
                {user.website}
            </Table.Cell>
            <Table.Cell className="font-medium">
                {user.company.name}
            </Table.Cell>
        </Table.Row>
    );
})

export default Row;
