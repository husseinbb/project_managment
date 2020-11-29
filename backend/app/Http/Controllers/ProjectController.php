<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use Illuminate\Support\Facades\Auth;

class ProjectController extends Controller
{
    //



    public function addProject(Request $request){
        $arr=[
    		'name'=>$request->name,
    		'deadline'=>$request->deadline,
        ];
        $project=new Project;
        $project->name=$request->name;
        $project->deadline=$request->deadline;
        $project->save();
        $project->employees()->attach(Auth::user()->id);
    	return response()->json($arr);
    }

    public function getProjectById($id){
        $project = Project::find($id);
    	return response()->json($project);
    }


    public function getAllProjects(){
        $projects=Project::all()->toArray();
    	return response()->json($projects);
    }

    
}
