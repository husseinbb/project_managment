<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TodoTasks extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'completed',
        'list_id'
    ];

    public function List()
    {
        return $this->belongsTo(TodoList::class);
    }
}
