<?php

namespace Database\Seeders;
use App\Models\Kesediaan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class KesediaanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
            $perusahaan = \App\Models\Perusahaan::find(1);
               $perusahaan->jurusans()->attach([
                1 => ['total' => 2],
                2 => ['total' => 2],
            ]);

            /*
            update
               $perusahaan->jurusans()->sync([
                1 => ['total' => 4],
                6 => ['total' => 2],
            ]);
            
            */

            /*
            delete
               $perusahaan->jurusans()->detach();
            
            */


    }
}
