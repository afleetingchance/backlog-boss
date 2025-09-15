import { useDeleteUsersGames } from '@/Hooks/useDeleteUsersGames';
import { UserGameType } from '@/types/UserGameType';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
    userGameId: UserGameType['id'];
};

const RemoveGameButton = ({ userGameId }: Props) => {
    const { deleteUserGame } = useDeleteUsersGames();

    return (
        <button
            className="rounded-md text-red-600"
            onClick={() => deleteUserGame(userGameId)}
        >
            <FontAwesomeIcon icon={faTrashCan} />
        </button>
    );
};

export default RemoveGameButton;
