<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Casts\Attribute;
class Perusahaan extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    public function siswa(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function users():BelongsToMany
    {
        return $this->belongsToMany(User::class, 'perusahaan_user', 'perusahaan_id', 'dudi_id');
    }

    // protected function image(): Attribute
    // {
    //     return Attribute::make(
    //         get: fn ($value) => url('/assets/perusahaan/'.$value),
    //     );
    // }
}
