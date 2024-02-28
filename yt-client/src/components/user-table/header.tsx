import { Table } from "../table";

function Header() {
    return (
        <Table.Header>
            <Table.Head className="w-[100px]">Name</Table.Head>
            <Table.Head>Email</Table.Head>
            <Table.Head>Website</Table.Head>
            <Table.Head className="text-right">Company</Table.Head>
        </Table.Header>
    );
}

export default Header;
