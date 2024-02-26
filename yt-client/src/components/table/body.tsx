import { PropsWithChildren } from "react"
import { TableBody, TableCell, TableRow } from "@/components/ui/table"
import { ReloadIcon } from "@radix-ui/react-icons"

type BodyProps = PropsWithChildren & {
    isEmpty: boolean
    isLoading: boolean
    emptyMessage: string
}

function Body(props: BodyProps) {
    const {
        children,
        emptyMessage,
        isEmpty,
        isLoading
    } = props

    if (isLoading) {
        return (
            <TableBody>
                <TableRow>
                    <TableCell>
                        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> Loading users
                    </TableCell>
                </TableRow>
            </TableBody>
        )
    }

    if (isEmpty) {
        return (
            <TableBody>
                <TableRow>
                    <TableCell align="center" colSpan={4}>
                        <span>{emptyMessage}</span>
                    </TableCell>
                </TableRow>
            </TableBody>
        );
    }

    return (
        <TableBody>
            {children}
        </TableBody>
    );
}

export default Body;
