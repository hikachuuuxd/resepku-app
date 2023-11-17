<?php
namespace Database\Seeders;
use App\Models\Resep;
use App\Models\User;
use App\Models\Bahan;
use App\Models\Langkah;
use Faker\Provider\Lorem;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ResepSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       for($i = 1; $i <= count(User::get()); $i++){
        Resep::create([
            'user_id' => $i,
            'title' => 'Judul Resep',
            'description' => 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus aliquam qui eveniet non eos blanditiis nam veritatis modi facilis explicabo?',
            'image' => '/assets/sate.jpeg',
        ]);
       }
    }
}

