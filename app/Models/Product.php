<?php
// ivan - 15 Juli 2023
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    // ngasih tau ke laravel isian apa aja yang boleh diisi
    protected $fillable = [
        'name',
        'description',
        'price',
        'image',
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
}
