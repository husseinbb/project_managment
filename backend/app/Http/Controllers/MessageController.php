<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Events\MessageSentEvent;
use App\Models\Message;
use App\Models\Employee;
use Illuminate\Support\Facades\Auth;

class MessageController extends Controller
{
    public function index()
    {
        return Message::with('employee')->get();
    }

    public function store(Request $request)
    {
        $id=Auth::user()->id;
        $employee = Employee::find($id);
        $value = $request->message;

        // $message = $employee->messages()->create([
        //     'message' => $value['message'],
        // ]);
        $message = Message::create([
            'message' => $value['message'],
            'employee_id'=> $id
        ]);
        
        // send event to listeners
        broadcast(new MessageSentEvent($message, $employee))->toOthers();

        return [
            'message' => $message,
            'user' => $employee
        ];
    }
}
