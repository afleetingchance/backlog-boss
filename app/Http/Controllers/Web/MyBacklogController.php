<?php

declare(strict_types=1);
namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\User;
use Inertia\Inertia;

class MyBacklogController extends Controller
{
    public function viewPage()
    {
        /** @var User $authUser */
        $authUser = auth()->user();

        return Inertia::render('MyBacklogPage', [
            'user_games' => $authUser->games()->with('game')->get(),
        ]);
    }
}
