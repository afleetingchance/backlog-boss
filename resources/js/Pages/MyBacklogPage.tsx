import React from 'react';
import {Head} from "@inertiajs/react";
import SignedInLayout from "@/Layouts/SignedInLayout";
import BacklogGameTable from "@/Components/Backlog/Tables/BacklogGameTable";
import {UserGameType} from "@/types/UserGameType";

const MyBacklogPage = ({user_games}: {user_games: UserGameType[]}) => {
    return (
        <SignedInLayout>
            <Head title="My Backlog" />
            { user_games.length === 0
                ? <h1 className="border bg-red-50">No games yet!</h1>
                : <BacklogGameTable userGames={user_games} />
            }
        </SignedInLayout>
    )
}

export default MyBacklogPage
