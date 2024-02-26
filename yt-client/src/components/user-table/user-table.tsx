import { Table } from "../table";
import UserTableBody from "./user-table-body";
import UserTableHeader from "./user-table-header";

function UserTable() {
    return (
        <Table>
            <UserTableHeader />
            <UserTableBody />
        </Table>
    );
}

export default UserTable;
