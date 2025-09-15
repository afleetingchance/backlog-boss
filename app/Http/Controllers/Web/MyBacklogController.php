<?php

declare(strict_types=1);
namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;

class MyBacklogController extends Controller
{
    public function viewPage(): Response
    {
        /** @var User $authUser */
        $authUser = auth()->user();

        return Inertia::render('MyBacklogPage', [
            'user_games' => $authUser->games()->with('game')->get(),
        ]);
    }
}
