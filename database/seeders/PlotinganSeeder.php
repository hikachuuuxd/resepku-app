<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PlotinganSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Plotingan::create([
            'perusahaan_id' => 1,
            'dudi_id' => 6,
            'guru_id' => 5
        ]);
    }
}
