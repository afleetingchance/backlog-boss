import { GameType } from '@/types/GameType';
import axios from 'axios';

export const useCreateUsersGames = () => {
    const fromUser = async (gameId: GameType['id']) => {
        try {
            await axios.post('/api/v1/users-games/create-from-user', {
                game_id: gameId,
            });
        } catch (error) {
            console.error('Error creating user game:', error);
        }
    };

    return { fromUser };
};
