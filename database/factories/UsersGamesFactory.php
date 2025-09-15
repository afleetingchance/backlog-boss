<?php

namespace Database\Factories;

use App\Enums\GamePlatforms;
use App\Models\Game;
use App\Models\User;
use App\Models\UsersGames;
use Illuminate\Database\Eloquent\Factories\Factory;

class UsersGamesFactory extends Factory
{
    protected $model = UsersGames::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
            'game_id' => Game::factory(),
            'is_owned' => false,
            'is_wishlisted' => false,
            'platform_preference' => GamePlatforms::WINDOWS,
            'rating' => fake()->numberBetween(0,10),
            'review' => fake()->text,
        ];
    }
}
