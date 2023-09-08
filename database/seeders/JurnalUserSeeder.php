<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JurnalUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $jurnal = \App\Models\Jurnal::get('id');
        for($i = 0; $i < 3; $i++){
            if($jurnal[$i]['id'] == 1){
                \App\Models\User::find(1)->jurnals()->attach(1);
            }elseif($jurnal[$i]['id'] == 2){
                \App\Models\User::find(2)->jurnals()->attach(2);
            }elseif($jurnal[$i]['id'] == 3){
                \App\Models\User::find(3)->jurnals()->attach(3);
            }
        }

    }
}
