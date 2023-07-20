<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    use HasFactory;

    // ngasih tau ke laravel isian apa aja yang boleh diisi
    protected $fillable = [
        'title',
        'slug',
        'content',
        'image',
        'published',
    ];
}