<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTodoListsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('todo_lists', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('project_id');
            $table->foreign('project_id')
            ->references('id')
            ->on('projects')
            ->onDelete('cascade');

            $table->unsignedBigInteger('admin_id');
            $table->foreign('admin_id')
            ->references('id')
            ->on('employees')
            ->onDelete('cascade');;

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
        Schema::dropIfExists('todo_lists');
    }
}
