<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JurnalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $jurnals = [
                'isi' => '- Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, maiores.
                          - Lorem ipsum dolor sit amet consectetur adipisicing elit
                          - Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur inventore quam voluptatum odit dicta ratione!',
            
        ];

        for($i = 0; $i<3; $i++){
            \App\Models\Jurnal::create($jurnals);
        }
    }
}
