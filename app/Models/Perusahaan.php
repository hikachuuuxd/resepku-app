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

    public function users():BelongsToMany
    {
        return $this->belongsToMany(User::class, 'perusahaan_user', 'perusahaan_id', 'dudi_id');
    }

    public function jurusans():BelongsToMany
    {
        return $this->belongsToMany(Jurusan::class, 'kesediaans', 'perusahaan_id', 'jurusan_id')->withPivot('total');
    }

    // protected function image(): Attribute
    // {
    //     return Attribute::make(
    //         get: fn ($value) => url('/assets/perusahaan/'.$value),
    //     );
    // }
}
