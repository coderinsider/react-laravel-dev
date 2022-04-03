<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PromoCode;

class PromoCodeController extends Controller
{
    //
    public function __construct(PromoCode $promocode) {
        $this->promocode = $promocode;
        $this->totalReocrd = 20;
    }


    public function findandIfExistsUpdate(Request $req) {
        $requestPromoteCode = $req->input('promo_code');
        $findRecord = $this->promocode->where('promo_codes', $requestPromoteCode)->where('is_available', 1);

        if($findRecord->exists()) {
            // if has promotion code true
            $updateRecord = $findRecord->update([
                'is_available' => 0
            ]);
            return response()->json(['status' => true, 'message' => 'PromoCode success'], 200);
        } else {
            return response()->json(['status' => false, 'message' => 'Your PromoCode incorrent'], 200);
        }
    }

    public function findandRecord() {
        $findRecord = $this->promocode->paginate($this->totalReocrd);
        $dataArray = [];
        foreach($findRecord as $each => $value) {
            $dataArray[$each] = [
                'id' => $value->id,
                'promo_codes' => $value->promo_codes,
                'is_available' => $value->is_available
            ];
        }
        return response()->json([
            'errorCode' => 0,
            'message' => 'Route request success',
            'status' => true,
            'data' => [
                'total_item' => $this->totalReocrd,
                'total_page' => $findRecord->lastPage(),
                'current_page' => $findRecord->currentPage(),
                'promocode_lists'=> $dataArray,
                'paganation' => $findRecord->items()
            ],    
        ], 200);
    }
}
