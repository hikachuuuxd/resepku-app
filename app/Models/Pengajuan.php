<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Pengajuan extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    public function siswa(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
