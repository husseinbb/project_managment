<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Company;

class CompanyController extends Controller
{
    //

    public function addCompany(Request $request){
        $arr=[
    		'name'=>$request->name,
    		'location'=>$request->location,
    		'manager_id'=>$request->manager_id,
    	];
    	Company::create($arr);
    	return response()->json($arr);
    }

    public function getCompanyById($id){
        $company = Company::find($id);
    	return response()->json($company);
    }
}
