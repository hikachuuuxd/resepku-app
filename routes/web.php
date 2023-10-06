<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PerusahaanController;
use App\Http\Controllers\PlotinganController;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::put('/pengajuan/konfirmasi/{pengajuan}', [PerusahaanController::class, 'konfirmasi'])->name('pengajuan.konfirmasi');
    Route::put('/pengajuan/active/{pengajuan}', [PerusahaanController::class, 'active'])->name('pengajuan.active');
    Route::resource('/pengajuan', PerusahaanController::class)->names('pengajuan');
    Route::resource('/plotingan', PlotinganController::class)->names('plotingan');

    Route::get('/perusahaan', function () {
        return Inertia::render('Pengajuan/Index');
    })->name('perusahaan');
    Route::get('/jurnal', function () {
        return Inertia::render('Jurnal/Index');
    })->name('jurnal');
});

require __DIR__.'/auth.php';
