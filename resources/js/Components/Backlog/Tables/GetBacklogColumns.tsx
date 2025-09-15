import { createColumnHelper } from "@tanstack/react-table";
import { UserGameType } from "@/types/UserGameType";
import DateTimeFormatter from "@/Helpers/DateTimeFormatter";

const columnHelper = createColumnHelper<UserGameType>();

const getBacklogColumns = () => [
    columnHelper.accessor('game.name', {
        id: 'name',
        size: 200,
        minSize: 100,
        maxSize: 300,
        header: 'Title',
        cell: (info) => info.getValue(),
        meta: {
            classNames: {
                header: 'text-left pl-4',
                cell: 'truncate pl-4',
            },
        },
    }),
    columnHelper.accessor('game.description', {
        id: 'description',
        size: 200,
        minSize: 100,
        maxSize: 300,
        header: 'Description',
        cell: info => info.getValue(),
        meta: {
            classNames: {
                header: 'text-left pl-4',
                cell: 'truncate pl-4',
            },
        },
    }),
    columnHelper.accessor('game.release_date', {
        id: 'release_date',
        size: 50,
        minSize: 50,
        maxSize: 50,
        header: 'Release Date',
        cell: info => DateTimeFormatter.forDisplay(info.getValue()),
        meta: {
            classNames: {
                header: 'text-left pl-4',
                cell: 'truncate pl-4',
            },
        },
    }),
];

export default getBacklogColumns
