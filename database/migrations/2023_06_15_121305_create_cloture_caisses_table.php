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
        Schema::create('cloture_caisses', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->string("date");
            $table->string("time");
            $table->string("caissierE");
            $table->string("caissierS");
            $table->integer("montant");
            $table->integer("montantE");
            $table->integer("glovoE");
            $table->integer("glovoC");
            $table->integer("cartebancaire");
            $table->integer("LivE");
            $table->integer("LivC");
            $table->integer("ComGlovo");
            $table->integer("ComLivraison");
            $table->integer("Compensation");
            $table->string("signature");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cloture_caisses');
    }
};
