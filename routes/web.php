<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
})->name("admin.dashboard");

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');
