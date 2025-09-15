export interface GameType {
    id: number;
    name: string;
    description: string;
    image_url: string;
    avg_time_to_beat: number;
    avg_rating: number;
    release_date: Date;
    available_platforms: number[];
}
