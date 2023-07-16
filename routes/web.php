<?php
// Ivan - 15 Agustus 2021
use App\Http\Controllers\AboutController;
use App\Http\Controllers\Admin;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TestController;
use Illuminate\Support\Facades\Route;


// jangan lupa name route nya, karena nanti akan digunakan di inertiajs
// semisal lupa ganti nama route ->name(about) padahal menuju admin, maka milik about akan error

// user 
Route::get('/', HomeController::class)->name('home');
// testing
Route::get('test', TestController::class)->name('test');
Route::post('test', [TestController::class, 'store'])->name('test.store');
Route::put('test', [TestController::class, 'edit'])->name('test.edit');
Route::delete('test/{id}', [TestController::class, 'delete'])->name('test.delete');

Route::get('dashboard', DashboardController::class)->middleware(['auth', 'verified'])->name('dashboard');
Route::get('about', AboutController::class)->name('about');



// admin
Route::controller(ProfileController::class)->middleware('auth')->group(function () {
    Route::get('admin', Admin::class)->name('admin');
    Route::get('profile/edit', 'edit')->name('profile.edit');
    Route::patch('profile', 'update')->name('profile.update');
    Route::delete('profile', 'destroy')->name('profile.destroy');
});

require __DIR__ . '/features.php';
require __DIR__ . '/auth.php';
