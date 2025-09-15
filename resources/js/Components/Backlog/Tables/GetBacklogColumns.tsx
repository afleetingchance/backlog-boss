import RemoveGameButton from '@/Components/Backlog/Tables/RemoveGameButton';
import DateTimeFormatter from '@/Helpers/DateTimeFormatter';
import { UserGameType } from '@/types/UserGameType';
import { Link } from '@inertiajs/react';
import { createColumnHelper } from '@tanstack/react-table';

const columnHelper = createColumnHelper<UserGameType>();

const getBacklogColumns = () => [
    columnHelper.accessor('game.name', {
        id: 'name',
        size: 200,
        minSize: 100,
        maxSize: 300,
        header: 'Title',
        cell: (info) => (
            <Link
                href={route('games.details', {
                    game: info.row.original.game_id,
                })}
                className="text-blue-400"
            >
                {info.getValue()}
            </Link>
        ),
        meta: {
            classNames: {
                header: 'text-left pl-4',
                cell: 'truncate pl-4 py-2',
            },
        },
    }),
    columnHelper.accessor('game.description', {
        id: 'description',
        size: 200,
        minSize: 100,
        maxSize: 300,
        header: 'Description',
        cell: (info) => info.getValue(),
        meta: {
            classNames: {
                header: 'text-left pl-4',
                cell: 'truncate pl-4 py-2',
            },
        },
    }),
    columnHelper.accessor('game.release_date', {
        id: 'release_date',
        size: 50,
        minSize: 50,
        maxSize: 50,
        header: 'Release Date',
        cell: (info) => DateTimeFormatter.forDisplay(info.getValue()),
        meta: {
            classNames: {
                header: 'text-left pl-4',
                cell: 'truncate pl-4 py-2',
            },
        },
    }),
    columnHelper.display({
        id: 'remove',
        size: 50,
        minSize: 50,
        maxSize: 50,
        cell: (info) => <RemoveGameButton userGameId={info.row.original.id} />,
        meta: {
            classNames: {
                cell: 'truncate pl-4 py-2',
            },
        },
    }),
];

export default getBacklogColumns;
