<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TodoList;
use App\Models\TodoTasks;



class TodoListController extends Controller
{
    //

    public function createList(Request $request){
        $arr=[
    		'project_id'=>$request->project_id,
            'admin_id'=>$request->admin_id,
    	];
    	TodoList::create($arr);
    	return response()->json($arr);
    }

    public function deleteList(Request $request){
    	TodoList::destroy($request->id);
    	return response()->json('deleted');
    }

    public function deleteCompletedTasks(TodoList $list){
    
        foreach($list->tasks()->get() as $k=>$v){
            if($v['completed'] == 1){
                $task=TodoTasks::destroy($v['id']);
            }
        }
         return response()->json('deleted');
     }

}
