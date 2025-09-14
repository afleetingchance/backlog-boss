<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        if(!Schema::hasTable('users_games')) {
            Schema::create('users_games', function (Blueprint $table) {
                $table->id();
                $table->unsignedBigInteger('user_id')->nullable(false);
                $table->foreign('user_id')
                    ->references('id')
                    ->on('users')
                    ->onDelete('cascade');
                $table->unsignedBigInteger('game_id')->nullable(false);
                $table->foreign('game_id')
                    ->references('id')
                    ->on('games')
                    ->onDelete('cascade');
                $table->boolean('is_owned')->nullable(false)->default(0);
                $table->boolean('is_wishlisted')->nullable(false)->default(0);
                $table->unsignedTinyInteger('platform_preference')->nullable(true);
                $table->unsignedTinyInteger('rating')->nullable(true);
                $table->text('review')->nullable(false);
                $table->timestamps();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users_games');
    }
};
