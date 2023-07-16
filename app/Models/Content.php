<?php
// ivan - 16 Juli 2023
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
// dependency uuid untuk generate uuid otomatis
use Ramsey\Uuid\Uuid;

class Content extends Model
{
    use HasFactory;

    // ngasih tau ke laravel isian apa aja yang boleh diisi
    protected $fillable = [
        'id', // tambahin id biar bisa diisi
        'title',
        'slug',
        'type',
        'content',
        'image',
        'published',
    ];

    // ngasih tau laravel kalo id (uuid) yang digunakan bukan auto increment
    public function getIncrementing()
    {
        return false;
    }

    // ngasih tau laravel kalo id (uuid) yang digunakan bukan integer melainkan string
    public function getKeyType()
    {
        return 'string';
    }

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->{$model->getKeyName()} = Uuid::uuid4()->toString();
        });
    }

}