<?php

namespace Database\Factories;

use App\Enums\GamePlatforms;
use App\Models\Game;
use Illuminate\Database\Eloquent\Factories\Factory;

class GameFactory extends Factory
{
    protected $model = Game::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'description' => fake()->text(),
            'image_url' => fake()->url(),
            'avg_time_to_beat' => fake()->numberBetween(600,900000),
            'avg_rating' => fake()->randomFloat(2,0,10),
            'release_date' => now(),
            'available_platforms' => [GamePlatforms::WINDOWS, GamePlatforms::PLAYSTATION_5, GamePlatforms::XBOX_X_S],
        ];
    }
}
