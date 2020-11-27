<?php

namespace App\Actions\Fortify;

use App\Models\Employee;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array  $input
     * @return \App\Models\User
     */
    public function create(array $input)
    {
        Validator::make($input, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:employees'],
            'password' => $this->passwordRules(),
        ])->validate();

        if (!array_key_exists ( 'manager_id' , $input )){
            $input['manager_id']=null;
        }

        if (!array_key_exists ( 'level' , $input )){
            $input['level']=1;
        }

        if (!array_key_exists ( 'company_id' , $input )){
            $input['company_id']=null;
        }

        return Employee::create([
            'name' => $input['name'],
            'email' => $input['email'],
            'password' => Hash::make($input['password']),
            'level'=>$input['level'],
            'manager_id'=>$input['manager_id'],
            'company_id'=>$input['company_id']
        ]);
    }
}
