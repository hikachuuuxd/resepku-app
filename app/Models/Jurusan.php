<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Jurusan extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    public $timestamps = false;

    public function siswas():BelongsToMany
    {
        return $this->belongsToMany(User::class, 'jurusan_user', 'jurusan_id', 'siswa_id');
    }
}
