<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CreateUsersGamesFromUserRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'game_id' => [
                'required',
                'integer',
                Rule::exists('games','id'),
            ],
        ];
    }
}
