import {UserType} from "@/types/UserType";
import {GameType} from "@/types/GameType";

export interface UserGameType {
    id: number;
    user_id: UserType['id'];
    user: UserType;
    game_id: GameType['id'];
    game: GameType;
}
