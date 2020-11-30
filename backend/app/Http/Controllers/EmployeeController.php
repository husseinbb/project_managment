<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employee;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;



class EmployeeController extends Controller
{
    //


    public function addEmployee(Request $request){
        $arr=[
    		'name'=>$request->name,
            'email'=>$request->email,
            'password' => Hash::make($request->password),
            'level'=>$request->level,
            'manager_id'=>Auth::user()->id,
    	];
    	Employee::create($arr);
    	return response()->json($arr);
    }

    public function getAllEmployees(){
        $id=Auth::user()->id;
        $employees=Employee::where('manager_id',$id)->get()->toArray();
    	return response()->json($employees);
    }
}
