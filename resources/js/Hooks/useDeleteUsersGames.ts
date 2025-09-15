import { UserGameType } from '@/types/UserGameType';
import { router } from '@inertiajs/react';
import axios from 'axios';

export const useDeleteUsersGames = () => {
    const deleteUserGame = async (userGameId: UserGameType['id']) => {
        try {
            await axios.delete(`/api/v1/users-games/${userGameId}`);
            router.reload({ only: ['user_games'] });
        } catch (error) {
            console.error('Error deleting user game:', error);
        }
    };

    return { deleteUserGame };
};
