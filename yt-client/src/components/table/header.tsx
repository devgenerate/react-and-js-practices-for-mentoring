import { PropsWithChildren } from "react";
import {
    TableHeader,
    TableRow,
} from "@/components/ui/table"

type HeaderProps = PropsWithChildren

function Header({ children }: HeaderProps) {
    return (
        <TableHeader>
            <TableRow>
                {children}
            </TableRow>
        </TableHeader>
    );
}

export default Header;
