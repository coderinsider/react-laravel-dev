<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderCompletesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order_completes', function (Blueprint $table) {
            $table->id();
            $table->string('order_name');
            $table->integer('product_id');
            $table->integer('total_credit');
            $table->integer('pack_price');
            $table->string('subtotal');
            $table->string('gst');
            $table->string('discount');
            $table->string('grand_total');
            $table->string('order_status');
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
        Schema::dropIfExists('order_completes');
    }
}
