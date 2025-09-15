import React from 'react';
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { UserGameType } from "@/types/UserGameType";
import getBacklogColumns from "@/Components/Backlog/Tables/GetBacklogColumns";

type Props = {
    userGames: UserGameType[]
}

const BacklogGameTable = ({ userGames }: Props) => {
    const columns = getBacklogColumns();

    const table = useReactTable<UserGameType>({
        data: userGames,
        columns: columns as ColumnDef<UserGameType, any>[],

        getRowId: row => row?.id + '',
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <table className="w-full table-fixed divide-y divide-black">
            <thead className="sticky top-0">
                {table.getHeaderGroups().map((hg) => (
                    <tr key={hg.id}>
                        {hg.headers.map((header) => (
                            <th
                                key={header.id}
                                className={header.column.columnDef.meta?.classNames?.header}
                            >
                                {flexRender(header.column.columnDef.header, header.getContext())}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody>
                {table.getRowModel().rows.map((row) => (
                    <tr key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                            <td
                                key={cell.id}
                                className={cell.column.columnDef.meta?.classNames?.cell}
                            >
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default BacklogGameTable
