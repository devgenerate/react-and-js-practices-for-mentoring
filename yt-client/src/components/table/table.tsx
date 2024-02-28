import { PropsWithChildren } from "react";

import {
    Table as UiTable,
    TableHead,
    TableRow,
    TableCell,
} from "@/components/ui/table"
import Header from "./header";
import Body from "./body";

type TableProps = PropsWithChildren

function Table({ children }: TableProps) {
    return (
        <main className="flex justify-center pt-4">
            <section className="flex justify-center max-h-[90%]">
                <UiTable>
                    {children}
                </UiTable>
            </section>
        </main>
    );
}

Table.Head = TableHead
Table.Header = Header
Table.Body = Body
Table.Row = TableRow
Table.Cell = TableCell

export default Table;
