<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderComplete extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_name',
        'product_id',
        'total_credit',
        'pack_price',
        'subtotal',
        'gst',
        'discount',
        'grand_total',
        'order_status'
    ];
}
