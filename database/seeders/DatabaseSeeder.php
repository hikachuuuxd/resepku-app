<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $users = [
            'Siswa1',
            'Siswa2',
            'Siswa3',
            'Siswa4',
            'Guru',
            'Dudi', 
            'Admin'
        ];

        
        // \App\Models\User::factory(10)->create();
        for($x = 0; $x < count($users); $x++){

            \App\Models\User::factory()->create([
                'name' => $users[$x],
                'email' => strtolower($users[$x])."@example.com",
            ]);
        }


        $roles = [
            ['name' => 'Admin'],
            ['name' => 'Siswa'],
            ['name' => 'Guru'],
            ['name' => 'Dudi'],
             
        ];
      
        for($i = 0; $i < count($roles); $i++){
            \App\Models\Role::create($roles[$i]);
        }
      
     

     
    }
}
