<?php

namespace Database\Seeders;
use App\Models\Resep;
use App\Models\User;
use App\Models\Bahan;
use App\Models\Langkah;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $bahans = ['Lorem ipsum dolor sit amet.', 'Lorem, ipsum.', 'Lorem ipsum dolor sit.'];
        $langkahs = ['Lorem ipsum dolor sit amet.', 'Lorem, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus aliquam quiipsum.', 'Lorem ipsum dolor sit.', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Duc'];

        for($i = 1; $i<=count(Resep::get()); $i++){
            $resep = Resep::find($i);
            $resep->bahans()->saveMany([
                new Bahan(['item' => $bahans[0]]),
                new Bahan(['item' => $bahans[1]]),
                new Bahan(['item' => $bahans[2]])
            ]);
            $resep->langkahs()->saveMany([
                new Langkah(['item' => $langkahs[0]]),
                new Langkah(['item' => $langkahs[1]]),
                new Langkah(['item' => $langkahs[2]]),
                new Langkah(['item' => $langkahs[3]])
            ]);
        }
    }
}
