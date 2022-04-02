<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductLists extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_lists', function (Blueprint $table) {
            $table->id();
            $table->integer('display_order'); //1
            $table->string('pack_id');// uuid 20c59fd5-d327-4540-bee4-6a2f0ca4d3ee
            $table->string('pack_name'); // 20 Class Pack
            $table->string('pack_description');//20 Class Pack desc
            $table->string('pack_type'); // non_shareable
            $table->integer('total_credit'); // 10
            $table->string('tag_name')->nullable(); //Popular
            $table->integer('validity_month'); //3
            $table->string('pack_price'); //235.4
            $table->boolean('newbie_first_attend'); //false
            $table->integer('newbie_addition_credit'); // 1
            $table->string('newbie_note'); //Newbie get an additional Free class
            $table->string('pack_alias'); // pack-20
            $table->string('estimate_price'); // 23.54
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
        Schema::dropIfExists('product_lists');
    }
}
