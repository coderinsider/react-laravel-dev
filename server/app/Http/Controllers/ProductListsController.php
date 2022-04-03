<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Products;
class ProductListsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct(Products $products) {
        $this->products = $products;
        $this->totalReocrd = 6;
    }
    public function index()
    {
        $findRecords = $this->products->paginate($this->totalReocrd);

        $dataArray = [];
        foreach($findRecords as $each => $value) {
            $dataArray[$each] = [
                "id" => $value->id,
                "display_order" => $value->id,
                "pack_id" => $value->pack_id,
                "pack_name" => $value->pack_name,
                "pack_description" => $value->pack_description,
                "pack_type" => $value->pack_type,
                "total_credit" => $value->total_credit,
                "tag_name" => $value->tag_name,
                "validity_month" => $value->validity_month,
                "pack_price" => $value->pack_price,
                "newbie_first_attend" => $value->newbie_first_attend,
                "newbie_addition_credit" => $value->newbie_addition_credit,
                "newbie_note" => $value->newbie_note,
                "pack_alias" => $value->pack_alias,
                "estimate_price" => $value->estimate_price,
            ];
        }
        return response([
            'errorCode' => 0,
            'message' => 'Route request success',
            'status' => true, 
            'data' => [
                'total_item' => $this->totalReocrd,
                'total_page' => $findRecords->lastPage(),
                'mem_tier' => 'newbie',
                'total_expired_class' => 0,
                'current_page' => $findRecords->currentPage(),
                'pack_list'=> $dataArray
            ]
        ], 200);
    }
    public function findByEachOne($uuid) {
        $findRecords = $this->products->where('pack_id', $uuid)->get();

        $dataArray = [];
        foreach($findRecords as $each => $value) {
            $dataArray[$each] = [
                "id" => $value->id,
                "display_order" => $value->id,
                "pack_id" => $value->pack_id,
                "pack_name" => $value->pack_name,
                "pack_description" => $value->pack_description,
                "pack_type" => $value->pack_type,
                "total_credit" => $value->total_credit,
                "tag_name" => $value->tag_name,
                "validity_month" => $value->validity_month,
                "pack_price" => $value->pack_price,
                "newbie_first_attend" => $value->newbie_first_attend,
                "newbie_addition_credit" => $value->newbie_addition_credit,
                "newbie_note" => $value->newbie_note,
                "pack_alias" => $value->pack_alias,
                "estimate_price" => $value->estimate_price,
            ];
        }
        return response([
            'errorCode' => 0,
            'message' => 'Route request success',
            'status' => true, 
            'data' => [
                'pack_list'=> $dataArray
            ]
        ], 200);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
