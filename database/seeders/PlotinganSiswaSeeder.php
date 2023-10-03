<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PlotinganSiswaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $plotingan = \App\Models\Plotingan::find(1);
        $plotingan->siswas()->attach([1, 2, 3]);

    }
}
