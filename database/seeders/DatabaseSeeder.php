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
            'userSatu',
            'userDua',
            'userTiga',
            'userEmpat',
            'userLima',
            'userEnam', 
            'userTujuh'
        ];

        
        // \App\Models\User::factory(10)->create();
        for($x = 0; $x < count($users); $x++){

            \App\Models\User::factory()->create([
                'name' => $users[$x],
                'email' => strtolower($users[$x])."@example.com",
            ]);
        }


        $this->call([
            ResepSeeder::class,
            LikeSeeder::class,
            ItemSeeder::class,
        ]);
  
    }

    
}
