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

        Schema::create('carousel', function (Blueprint $table): void {
            $table->increments('id');
            $table->string('title');
            $table->string('src');
            $table->timestamps();
        });

        Schema::create('content', function (Blueprint $table): void {
            $table->id();
            $table->string('slug')->unique();
            $table->string('title');
            $table->text('content');
            $table->timestamps();
        });

        Schema::create('content_image', function (Blueprint $table): void {
            $table->id();
            $table->string('slug')->unique();
            $table->string('title');
            $table->text('content');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {

        Schema::dropIfExists('carousel');
        Schema::dropIfExists('content');
        Schema::dropIfExists('content_image');
    }
};
