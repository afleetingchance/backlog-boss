import Card from '@/Components/Cards/Card';
import DateTimeFormatter from '@/Helpers/DateTimeFormatter';
import { useCreateUsersGames } from '@/Hooks/useCreateUsersGames';
import SignedInLayout from '@/Layouts/SignedInLayout';
import { GameType } from '@/types/GameType';

const GameDetailsPage = ({ game }: { game: GameType }) => {
    const { fromUser } = useCreateUsersGames();

    return (
        <SignedInLayout>
            <div className="-mx-12 -mt-6 mb-6 flex items-center border-b-2 border-b-gray-600 bg-gray-800 px-12 py-6">
                <h1 className="grow py-4 text-5xl font-bold text-white">
                    {game.name}
                </h1>
                <button
                    className="grow-0 justify-self-end rounded-md bg-emerald-700 font-semibold text-white"
                    onClick={() => fromUser(game.id)}
                >
                    <div className="px-4 py-2">Add To Backlog</div>
                </button>
            </div>
            <Card>
                <div className="grid gap-2">
                    <div className="mb-3">
                        <h2 className="text-xl font-bold">Description</h2>
                        <p>{game.description}</p>
                    </div>
                    <div className="mb-3">
                        <h2 className="text-xl font-bold">Time To Beat</h2>
                        <p>
                            {DateTimeFormatter.convertSecondsToHours(
                                game.avg_time_to_beat,
                            )}{' '}
                            hrs
                        </p>
                    </div>
                </div>
            </Card>
        </SignedInLayout>
    );
};

export default GameDetailsPage;
