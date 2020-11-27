<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;

class ProjectController extends Controller
{
    //



    public function addProject(Request $request){
        $arr=[
    		'name'=>$request->name,
    		'deadline'=>$request->deadline,
    	];
    	Project::create($arr);
    	return response()->json($arr);
    }

    public function getProjectById($id){
        $project = Project::find($id);
    	return response()->json($project);
    }
    
}
