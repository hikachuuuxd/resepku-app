<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;


class Plotingan extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    public function siswas() :BelongsToMany
    {
        return $this->belongsToMany(User::class, 'plotingan_siswa', 'plotingan_id', 'siswa_id');
    }
}
