<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\RegisterController;
use App\Http\Controllers\ProductListsController;
use App\Http\Controllers\PromoCodeController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::post('register', [RegisterController::class, 'register']);
Route::post('login', [RegisterController::class, 'login']);
Route::prefix('codigo')->middleware('auth:api')->group( function () {
    Route::post('products/promote/findcode', [PromoCodeController::class, 'findandIfExistsUpdate']);
    Route::get('products/promote/promolists', [PromoCodeController::class, 'findandRecord']);
    Route::get('products/records', [ProductListsController::class, 'index']);
    Route::get('products/records/{uuid}', [ProductListsController::class, 'findByEachOne']);
});