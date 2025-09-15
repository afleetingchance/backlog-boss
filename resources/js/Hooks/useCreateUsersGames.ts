import axios from "axios";
import {GameType} from "@/types/GameType";

export const useCreateUsersGames = () => {
    const fromUser = async (gameID: GameType['id']) => {
            try {
                await axios.post('/api/v1/users-games/create-from-user',{game_id: gameID});
            } catch (error) {
                console.error('Error fetching API data:', error);
            }
    }

    return {fromUser}
}
