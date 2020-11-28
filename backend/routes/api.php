<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\ProjectController;
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

Route::post('/addEmployee',[EmployeeController::class,'addEmployee']);
Route::get('/getEmployees',[EmployeeController::class,'getAllEmployees']);


Route::post('/addCompany',[CompanyController::class,'addCompany']);
Route::get('/getCompany/{id}',[CompanyController::class,'getCompanyById']);

Route::post('/addProject',[ProjectController::class,'addProject']);
Route::get('/getProject/{id}',[ProjectController::class,'getProjectById']);
Route::get('/getAllProjects',[ProjectController::class,'getAllProjects']);


