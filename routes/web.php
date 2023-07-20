<?php
// Ivan - 15 Agustus 2021
use App\Http\Controllers\AboutController;
use App\Http\Controllers\Admin;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\CacheController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\EditController;
use App\Http\Controllers\WebconfigController;
use Illuminate\Support\Facades\Route;


// jangan lupa name route nya, karena nanti akan digunakan di inertiajs
// semisal lupa ganti nama route ->name(about) padahal menuju admin, maka milik about akan error

// user 
// # halaman home
Route::get('/', HomeController::class)->name('home');
// testing
// # halaman test
Route::get('test', TestController::class)->name('test');
Route::post('test', [TestController::class, 'store'])->name('test.store');
Route::put('test', [TestController::class, 'edit'])->name('test.edit');
Route::delete('test/{id}', [TestController::class, 'delete'])->name('test.delete');
// # halaman products
Route::get('products', ProductController::class)->name('products');

// # halaman news
Route::get('news', NewsController::class)->name('news');
// # halaman contact
Route::get('contact', ContactController::class)->name('contact');
// # halaman testing cache
Route::get('cache', CacheController::class)->name('cache');

// # halaman edit sementara 
Route::get('edit', EditController::class)->name('edit');

// # halaman dashboard admin
Route::get('dashboard', DashboardController::class)->middleware(['auth', 'verified'])->name('dashboard');
Route::get('about', AboutController::class)->name('about');

// # halaman web config
Route::get('webconfig', WebconfigController::class)->name('webconfig');
Route::put('webconfig', [WebconfigController::class, 'update'])->name('webconfig.update');


// admin
Route::controller(ProfileController::class)->middleware('auth')->group(function () {
    Route::get('admin', Admin::class)->name('admin');
    Route::get('profile/edit', 'edit')->name('profile.edit');
    Route::patch('profile', 'update')->name('profile.update');
    Route::delete('profile', 'destroy')->name('profile.destroy');
});

require __DIR__ . '/features.php';
require __DIR__ . '/auth.php';