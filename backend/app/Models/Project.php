<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'deadline'
    ];

    public function employees(){
        return $this->belongsToMany(
            Employee::class,
            'projects_employees',
            // 'project_id',
            // 'employee_id'
        );
    }
}
