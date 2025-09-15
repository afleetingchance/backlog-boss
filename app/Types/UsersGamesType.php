<?php

declare(strict_types=1);
namespace App\Types;

class UsersGamesType extends BaseType
{
    protected array $fillable = [
        'user_id',
        'game_id',
        'rating',
        'review',
    ];
}
