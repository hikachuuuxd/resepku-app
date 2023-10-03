<?php

namespace Database\Seeders;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JurusanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $siswas = User::whereHas('roles', function($query) {
            $query->where('role_id', 2);
        })->get();

        for($i = 1; $i <= count($siswas); $i++)
        {
            $siswa = User::find($i);
            if($i == 1)
            {
                $siswa->jurusans()->attach(1);
            }elseif($i == 2)
            {
                $siswa->jurusans()->attach(2);
            }
            else{
                $siswa->jurusans()->attach(4);
            }
        }
    }
}
