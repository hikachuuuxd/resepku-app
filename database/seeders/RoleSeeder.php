<?php

namespace Database\Seeders;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
   
        for($y = 1; $y <= count(User::get()); $y++){
            $user = \App\Models\User::find($y);
            switch (strtolower($user->name)) {
                case 'admin':
                $user->roles()->attach(1);                       
                    break;
                case 'guru': 
                $user->roles()->attach(3);
                    break;
                case 'dudi':
                $user->roles()->attach(4);
                    break;
                default:
                $user->roles()->attach(2);
                    break;
            }

        }

    }
}
