<?php

namespace Database\Seeders;

use App\Models\Resep;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LikeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Resep::find(1)->likes()->attach([1, 2, 3]);
        Resep::find(2)->likes()->attach([4, 2, 3, 1, 5]);
    }
}
