<?php

declare(strict_types=1);
namespace App\Repo;

use App\Models\UsersGames;
use App\Types\UsersGamesType;

class UsersGamesRepo
{
    public function getById(int $id): ?UsersGames
    {
        return UsersGames::find($id);
    }

    public function create(UsersGamesType $createData): UsersGames
    {
        return UsersGames::create($createData->toArray());
    }
}
