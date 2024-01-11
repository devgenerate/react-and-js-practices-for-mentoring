import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";

import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Input } from "@/components/ui/input"

import { getUsers } from "@/queries/user.queries";
import { GQLUserListData } from "@/modules/user/domain/user";
import { updateUsername } from "@/mutations/user.mutations";

function HomePage() {
    const [newName, setNewName] = useState<Map<number, string>>(new Map())

    const { data, loading, refetch } = useQuery<GQLUserListData>(getUsers, {
        fetchPolicy: 'network-only'
    })

    const [onUpdateUsername] = useMutation(updateUsername);

    const onHandleUpdateUsername = (id: number) => async ()  => {
        await onUpdateUsername({
            variables: { id, name: newName.get(id) },
            onCompleted: () => {
                setNewName(new Map())
                refetch();
            }
        });
    }

    const onHandleUpdateNewNameState = (id: number, name: string) => {
        const newMap = structuredClone(newName)
        newMap.set(id, name)
        setNewName(newMap);
    }

    return (
        <main className="page flex justify-center items-center">
            { loading && (
                <section className="flex-column">
                    {
                        new Array(3).fill(null).map((_, index) => (
                            <Skeleton className="h-[30px] w-[362px] mb-10" key={`skeleton-user-${index}`} />
                        ))
                    }
                </section>
            ) }
            <section className="flex justify-center max-h-[90%]">
                {
                    !loading && !!data && (
                        <Table>
                            <TableCaption>A list of your recent invoices.</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">Name</TableHead>
                                    <TableHead>Website</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead />
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {data?.Users.map((user) => (
                                    <TableRow key={user.id}>
                                        <TableCell className="font-medium">{user.name}</TableCell>
                                        <TableCell>{user.website}</TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell className="text-right">
                                            <Button
                                                variant="outline"
                                                disabled={!newName.get(user.id)}
                                                onClick={onHandleUpdateUsername(user.id)}
                                            >
                                                Update
                                            </Button>
                                            <Input
                                                type="text"
                                                placeholder="New name"
                                                onChange={(event) => onHandleUpdateNewNameState(user.id, event.target.value)}
                                                value={newName.get(user.id) || ''}
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                <TableCell colSpan={3}>Total</TableCell>
                                <TableCell className="text-right">{data?.Users.length}</TableCell>
                                </TableRow>
                            </TableFooter>
                        </Table>
                    )
                }
            </section>
        </main>
    );
}

export default HomePage;
