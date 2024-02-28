import { observer } from 'mobx-react-lite'
import { ReloadIcon } from "@radix-ui/react-icons"

import { Table } from "../table";
import { useUserStore } from "@/hooks/useAppContext";

// eslint-disable-next-line react-refresh/only-export-components
function Loader() {
    const { isLoading } = useUserStore()

    if (!isLoading) {
        return null
    }

    return (
        <Table.Row>
            <Table.Cell>
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> Loading users
            </Table.Cell>
        </Table.Row>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export default observer(Loader);
