<?php
// ivan - 17 Juli 2023
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Response;

class CacheController extends Controller
{
    public function __invoke(Request $request): Response
    {
        // 👇🏻 create cache
        Cache::put('key', 'Hai', now()->addDay());
        // 👇🏻 create cache yang ga akan pernah expired
        Cache::forever('key2', 'Hai2');
        // 👇🏻 menghapus cache meskipun forever method
        // Cache::forget('key2');
        // 👇🏻 menghapus semua cache
        // Cache::flush();

        // 👇🏻 Cek apakah cache bernama key2 ada
        if (Cache::has('key2')) {
            // jika ada
            return inertia('cache')->with('cache', 'ada');
        } else {
            // jika tidak 
            return inertia('cache')->with('cache', 'ga ada');
        }

        // get cache
        return inertia('cache')->with('cache', Cache::get('key2'));
    }
}