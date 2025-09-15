import BacklogGameTable from '@/Components/Backlog/Tables/BacklogGameTable';
import Card from '@/Components/Cards/Card';
import SignedInLayout from '@/Layouts/SignedInLayout';
import { UserGameType } from '@/types/UserGameType';
import { Head } from '@inertiajs/react';

const MyBacklogPage = ({ user_games }: { user_games: UserGameType[] }) => {
    return (
        <SignedInLayout>
            <Head title="My Backlog" />
            <Card>
                {user_games.length === 0 ? (
                    <h1>No games yet!</h1>
                ) : (
                    <BacklogGameTable userGames={user_games} />
                )}
            </Card>
        </SignedInLayout>
    );
};

export default MyBacklogPage;
