<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
class Resep extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function likes(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'likes', 'resep_id', 'user_id');
    }
    public function bahans(): HasMany
    {
        return $this->hasMany(Bahan::class);
    }
    public function langkahs(): HasMany
    {
        return $this->hasMany(Langkah::class);
    }
    
}
