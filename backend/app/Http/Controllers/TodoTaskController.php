<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TodoTasks;
use App\Models\TodoList;


class TodoTaskController extends Controller
{
    //

    public function createTask(Request $request){
        $arr=[
    		'title'=>$request->title,
            'completed'=>$request->completed,
            'list_id'=>$request->list_id
    	];
    	TodoTasks::create($arr);
    	return response()->json($arr);
    }

    public function deleteTask($id){
       TodoTasks::destroy($id);
    	return response()->json('deleted');
    }



    public function changeTaskStatus($id){
        $list=TodoTasks::find($id);
        $task->completed=!$task->completed;
        $task->save();
    	return response()->json($task);
    }
}
