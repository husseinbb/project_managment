<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\MessageController;
use Illuminate\Support\Facades\Broadcast;
use App\Http\Controllers\EmployeeController;


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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Broadcast::routes(['middleware' => ['auth:sanctum']]);

<<<<<<< HEAD
Route::middleware('auth:sanctum')->get('/messages', [App\Http\Controllers\MessageController::class, 'index']);
Route::middleware('auth:sanctum')->post('/messages', [App\Http\Controllers\MessageController::class, 'store']);
=======
Route::middleware('auth:sanctum')->get('/messages', [MessageController::class, 'index']);
Route::middleware('auth:sanctum')->post('/messages', [MessageController::class, 'store']);
>>>>>>> 986c5cdf42f20c747e81377c59427e8d45f766bf

Route::post('/addEmployee',[EmployeeController::class,'addEmployee']);
Route::get('/getEmployees',[EmployeeController::class,'getAllEmployees']);


Route::post('/addCompany',[CompanyController::class,'addCompany']);
Route::get('/getCompany/{id}',[CompanyController::class,'getCompanyById']);

Route::post('/addProject',[ProjectController::class,'addProject']);
Route::get('/getProject/{id}',[ProjectController::class,'getProjectById']);
Route::get('/getAllProjects',[ProjectController::class,'getAllProjects']);


