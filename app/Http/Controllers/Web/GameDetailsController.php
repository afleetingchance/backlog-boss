<?php

declare(strict_types=1);
namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Game;
use Inertia\Inertia;
use Inertia\Response;

class GameDetailsController extends Controller
{
    public function viewPage(Game $game): Response
    {
        return Inertia::render('GameDetailsPage', [
            'game' => $game,
        ]);
    }
}
