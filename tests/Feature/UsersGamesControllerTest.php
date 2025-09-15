<?php

namespace Tests\Feature;

use App\Models\Game;
use App\Models\User;
use App\Models\UsersGames;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class UsersGamesControllerTest extends TestCase
{
    use RefreshDatabase;

    protected User $authUser;

    public function setUp(): void
    {
        parent::setUp();

        $this->authUser = User::factory()->create();
        $this->actingAs($this->authUser);
        Sanctum::actingAs($this->authUser);
    }

    public function test_can_create_user_game_from_user(): void
    {
        $game = Game::factory()->create();
        $response = $this->post('/api/v1/users-games/create-from-user', ['game_id' => $game->id]);

        $response->assertStatus(201);
        $this->assertDatabaseHas('users_games', ['user_id' => $this->authUser->id, 'game_id' => $game->id]);
    }

    public function test_cannot_create_user_game_from_user_without_game(): void
    {
        $gameId = 1;
        $response = $this->post('/api/v1/users-games/create-from-user');

        $response->assertStatus(302);
        $this->assertDatabaseMissing('users_games', ['user_id' => $this->authUser->id, 'game_id' => $gameId]);
    }

    public function test_cannot_create_user_game_from_user_with_invalid_game(): void
    {
        $gameId = 1;
        $response = $this->post('/api/v1/users-games/create-from-user', ['game_id' => $gameId]);

        $response->assertStatus(302);
        $this->assertDatabaseMissing('users_games', ['user_id' => $this->authUser->id, 'game_id' => $gameId]);
    }

    public function test_cannot_create_duplicate_user_game_from_user(): void
    {
        $game = Game::factory()->create();
        UsersGames::factory()->create(['user_id' => $this->authUser->id, 'game_id' => $game->id]);

        $response = $this->post('/api/v1/users-games/create-from-user', ['game_id' => $game->id]);

        $response->assertStatus(409);
    }
}
