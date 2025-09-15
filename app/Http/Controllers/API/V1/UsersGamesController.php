<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateUsersGamesFromUserRequest;
use App\Models\User;
use App\Models\UsersGames;
use App\Repo\UsersGamesRepo;
use App\Types\UsersGamesType;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Throwable;

class UsersGamesController extends Controller
{
    public function __construct(private readonly UsersGamesRepo $usersGamesRepo)
    {
    }

    public function createFromUser(CreateUsersGamesFromUserRequest $request): Response|JsonResponse|ResponseFactory
    {
        /** @var User $authUser */
        $authUser = auth()->user();
        $gameId = $request->input('game_id');

        try {
            $userGame = $this->usersGamesRepo->create(
                new UsersGamesType(['user_id' => $authUser->id, 'game_id' => $gameId])
            );

            return response()->json(data: $userGame->game->toArray(), status: 201);
        } catch (Throwable $throwable) {
            logger()->error($throwable->getMessage());
            return response(status: 409);
        }
    }

    public function destroy(UsersGames $userGame): Response
    {
        logger('$userGame', [$userGame]);
        /** @var User $authUser */
        $authUser = auth()->user();

        if ((string)$userGame->user_id === (string)$authUser->id) {
            $userGame->delete();
            return response()->noContent();
        } else {
            return response(status: 401);
        }
    }
}
