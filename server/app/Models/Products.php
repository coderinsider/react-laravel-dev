<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;
    protected $table = "product_lists";
    protected $fillable = [
        'display_order',
        'pack_id',
        'pack_name',
        'pack_description',
        'pack_type',
        'total_credit',
        'tag_name',
        'validity_month',
        'pack_price',
        'newbie_first_attend',
        'newbie_addition_credit',
        'newbie_note',
        'pack_alias',
        'estimate_price'
    ];
}
