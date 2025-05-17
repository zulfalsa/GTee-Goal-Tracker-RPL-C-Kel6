<?php

use Illuminate\Support\Facades\Route;
use App\Http\Middleware\FirebaseAuth;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\GoalTrackerController;
use App\Http\Controllers\ToDoListController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\UserController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login');
Route::post('/login', [AuthController::class, 'login']);
Route::get('/register', [AuthController::class, 'showRegisterForm'])->name('register');
Route::post('/register', [AuthController::class, 'register']);
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

Route::get('/goaltracker', [GoalTrackerController::class, 'index'])
    ->middleware(FirebaseAuth::class)
    ->name('goaltracker.index');
Route::get('/add-goaltracker', [GoalTrackerController::class, 'create']);
Route::post('/add-goaltracker', [GoalTrackerController::class, 'store']);
Route::get('/edit-goaltracker/{id}', [GoalTrackerController::class, 'edit'])->name('goaltracker.edit');
Route::put('/edit-goaltracker/{id}', [GoalTrackerController::class, 'update'])->name('goaltracker.update');
Route::get('/delete-goaltracker/{id}', [GoalTrackerController::class, 'destroy'])->name('goaltracker.destroy');
Route::delete('/delete-goaltracker/{id}', [GoalTrackerController::class, 'destroy'])->name('goaltracker.destroy');

Route::get('/todolist', [ToDoListController::class, 'index'])
    ->middleware(FirebaseAuth::class)
    ->name('todolist.index');
Route::get('/add-todolist', [ToDoListController::class, 'create']);
Route::post('/add-todolist', [ToDoListController::class, 'store']);
Route::get('/edit-todolist/{id}', [ToDoListController::class, 'edit'])->name('todolist.edit');
Route::put('/edit-todolist/{id}', [ToDoListController::class, 'update'])->name('todolist.update');
Route::get('/delete-todolist/{id}', [ToDoListController::class, 'destroy'])->name('todolist.destroy');
Route::delete('/delete-todolist/{id}', [ToDoListController::class, 'destroy'])->name('todolist.destroy');

Route::get('/category', [CategoryController::class, 'index'])
    ->middleware(FirebaseAuth::class)
    ->name('category.index');
Route::get('/add-category', [CategoryController::class, 'create']);
Route::post('/add-category', [CategoryController::class, 'store']);
Route::get('/edit-category/{id}', [CategoryController::class, 'edit'])->name('category.edit');
Route::put('/edit-category/{id}', [CategoryController::class, 'update'])->name('category.update');
Route::get('/delete-category/{id}', [CategoryController::class, 'destroy'])->name('category.destroy');
Route::delete('/delete-category/{id}', [CategoryController::class, 'destroy'])->name('category.destroy');



Route::get('/user', [UserController::class, 'index'])
    ->middleware(FirebaseAuth::class)
    ->name('user.index');



