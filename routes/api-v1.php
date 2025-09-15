<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\V1\UsersGamesController;

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('/users-games/create-from-user', [UsersGamesController::class, 'createFromUser'])
        ->name('users_games.create_from_user');
});
