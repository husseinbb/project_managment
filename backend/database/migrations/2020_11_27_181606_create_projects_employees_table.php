<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectsEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects_employees', function (Blueprint $table) {
            //$table->id();

            $table->unsignedBigInteger('employee_id');
            $table->foreign('employee_id')
            ->references('id')
            ->on('employees')
            ->onDelete('cascade');

            $table->unsignedBigInteger('project_id');
            $table->foreign('project_id')
            ->references('id')
            ->on('projects')
            ->onDelete('cascade');

            $table->primary(['employee_id', 'project_id']);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('projects_employees');
    }
}
