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
        Schema::create('plotingans', function (Blueprint $table) {
            $table->id();
           
            $table->unsignedBigInteger('perusahaan_id');
            $table->unsignedBigInteger('dudi_id');
            $table->unsignedBigInteger('guru_id');
 
            $table->foreign('perusahaan_id')->references('id')->on('perusahaans');
            $table->foreign('dudi_id')->references('id')->on('users');
            $table->foreign('guru_id')->references('id')->on('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('plotingans');
    }
};
