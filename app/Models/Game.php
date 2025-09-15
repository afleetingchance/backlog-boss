<?php

declare(strict_types=1);

namespace App\Models;

use App\Enums\GamePlatforms;
use Illuminate\Database\Eloquent\Casts\AsEnumCollection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Game extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'image_url',
        'avg_time_to_beat',
        'avg_rating',
        'release_date',
        'available_platforms'
    ];

    protected function casts(): array
    {
        return [
            'avg_rating' => 'decimal:2',
            'release_date' => 'date',
            'available_platforms' => AsEnumCollection::of(GamePlatforms::class),
        ];
    }

    public function reviews(): HasMany
    {
        return $this->hasMany(UsersGames::class);
    }
}
