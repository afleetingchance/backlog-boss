<?php

declare(strict_types=1);
namespace App\Models;

use App\Enums\GamePlatforms;
use Illuminate\Database\Eloquent\Model;

class UsersGames extends Model
{
    protected $fillable = [
        'user_id',
        'game_id',
        'is_owned',
        'is_wishlisted',
        'platform_preference',
        'rating',
        'review',
    ];

    protected function casts(): array
    {
        return [
            'is_owned' => 'boolean',
            'is_wishlisted' => 'boolean',
            'platform_preference' => GamePlatforms::class,
        ];
    }


}
