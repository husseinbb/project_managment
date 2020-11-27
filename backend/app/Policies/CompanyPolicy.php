<?php

namespace App\Policies;

use App\Models\Company;
use App\Models\Employee;
use Illuminate\Auth\Access\HandlesAuthorization;

class CompanyPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\Models\Employee  $employee
     * @return mixed
     */
    public function viewAny(Employee $employee)
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\Employee  $employee
     * @param  \App\Models\Company  $company
     * @return mixed
     */
    public function view(Employee $employee, Company $company)
    {
        //
        return $employee->company_id!==$company->id;

    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\Employee  $employee
     * @return mixed
     */
    public function create(Employee $employee)
    {
        //
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\Employee  $employee
     * @param  \App\Models\Company  $company
     * @return mixed
     */
    public function update(Employee $employee, Company $company)
    {
        //
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\Employee  $employee
     * @param  \App\Models\Company  $company
     * @return mixed
     */
    public function delete(Employee $employee, Company $company)
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\Employee  $employee
     * @param  \App\Models\Company  $company
     * @return mixed
     */
    public function restore(Employee $employee, Company $company)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\Employee  $employee
     * @param  \App\Models\Company  $company
     * @return mixed
     */
    public function forceDelete(Employee $employee, Company $company)
    {
        //
    }
}
