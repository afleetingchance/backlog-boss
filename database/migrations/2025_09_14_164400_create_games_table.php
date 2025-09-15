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
        if(!Schema::hasTable('games')) {
            Schema::create('games', function (Blueprint $table) {
                $table->id();
                $table->string('name',64)->nullable(false);
                $table->text('description')->nullable(true);
                $table->string('image_url',256)->nullable(true);
                $table->unsignedInteger('avg_time_to_beat')->nullable(true);
                $table->float('avg_rating',2)->nullable(false)->default(0);
                $table->date('release_date')->nullable(true);
                $table->json('available_platforms')->nullable(false)->default('[0]');
                $table->timestamps();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('games');
    }
};
