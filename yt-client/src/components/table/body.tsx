import { PropsWithChildren } from "react"
import { TableBody, TableCell, TableRow } from "@/components/ui/table"
import { ReloadIcon } from "@radix-ui/react-icons"

type BodyProps = PropsWithChildren & {
    isLoading: boolean
}

function Body(props: BodyProps) {
    const {
        children,
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

    return (
        <TableBody>
            {children}
        </TableBody>
    );
}

export default Body;
