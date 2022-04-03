<?php

namespace App\Http\Controllers;

use App\Models\OrderComplete;
use Illuminate\Http\Request;

class OrderCompleteController extends Controller
{
    public function __construct(OrderComplete $orderComplete) {
        $this->orderComplete = $orderComplete;
        $this->total_posts = 20;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $findAll = $this->orderComplete->paginate($this->total_posts);
        if($findAll) {
            return response()->json(['status' => true, 'data' => $findAll, 'message' => 'success'], 200);
        }  else {
            return response()->json(['status' => false, 'data' => [], 'message' => 'Something went wrong'], 200);
        }
    }
    public function findByOne($id) {
        $uuid = $id;

        $findRecord = $this->orderComplete->where('product_id', $id)->first();//paginate($this->total_posts);
        if($findRecord) {
            return response()->json(['status' => true, 'data' => $findRecord, 'message' => 'success'], 200);
        } else {
            return response()->json(['status' => false, 'data' => $findRecord, 'message' => 'Something went wrong'], 200);
        }
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
        $saveRecord = [
            'order_name' => $request->input('order_name'),
            'product_id' => $request->input('product_id'),
            'total_credit' => $request->input('total_credit'),
            'pack_price' => $request->input('pack_price'),
            'subtotal' => $request->input('subtotal'),
            'gst' => $request->input('gst'),
            'discount' => $request->input('discount'),
            'grand_total' => $request->input('grand_total'),
            'order_status' => $request->input('order_status'),

        ];
        $createOne = $this->orderComplete->create($saveRecord);
        if($createOne) {
            return response(['status' => true, 'data' => $createOne, 'message' => 'success'], 200);
        } else {
            return response(['status' => false, 'data' => $createOne, 'message' => "Cannot create your record"], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\OrderComplete  $orderComplete
     * @return \Illuminate\Http\Response
     */
    public function show(OrderComplete $orderComplete)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\OrderComplete  $orderComplete
     * @return \Illuminate\Http\Response
     */
    public function edit(OrderComplete $orderComplete)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\OrderComplete  $orderComplete
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, OrderComplete $orderComplete)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\OrderComplete  $orderComplete
     * @return \Illuminate\Http\Response
     */
    public function destroy(OrderComplete $orderComplete)
    {
        //
    }
}
