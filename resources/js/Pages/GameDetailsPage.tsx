import React from 'react';
import { GameType } from "@/types/GameType";
import SignedInLayout from "@/Layouts/SignedInLayout";
import DateTimeFormatter from "@/Helpers/DateTimeFormatter";
import { Link } from "@inertiajs/react";
import { useCreateUsersGames } from "@/Hooks/useCreateUsersGames";

const GameDetailsPage = ({game}: {game: GameType}) => {
    const { fromUser } = useCreateUsersGames();

    return (
        <SignedInLayout>
            <h1>{game.name}</h1>
            <p>{game.description}</p>
            <p>{DateTimeFormatter.convertSecondsToHours(game.avg_time_to_beat)}</p>
            <button onClick={() => fromUser(game.id)}>Add To My Backlog</button>
        </SignedInLayout>
    );
}

export default GameDetailsPage
