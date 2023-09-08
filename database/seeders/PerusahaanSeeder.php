<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PerusahaanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $perusahaan = [
            [
                'name' => 'Perusahaan 1',
                'alamat' => 'Jl perusahaan 1 Kota Perusahaan 1 Kec.Perusahaan',
                'detail' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quibusdam nobis quis debitis perspiciatis explicabo obcaecati voluptatem nam? Voluptate, omnis consequuntur nostrum quibusdam minima minus assumenda at quidem ratione quia!'
            ], 
            [
                'name' => 'Perusahaan 2',
                'alamat' => 'Jl Perusahaan 2 Kec.Perusahaan 2 Kota Perusahaan 2', 
                'detail' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quibusdam nobis quis debitis perspiciatis explicabo obcaecati voluptatem nam? Voluptate, omnis consequuntur'
            ]
            ];
        
        for($i = 0; $i < count($perusahaan); $i++){
            \App\Models\Perusahaan::create($perusahaan[$i]);
        }
    }
}

