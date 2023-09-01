<?php

namespace App\Http\Controllers;

use App\Jobs\SendEmailOrderQueueJob;
use App\Jobs\SendEmailQueueJob;
use App\Models\CuisinierOrder;
use Illuminate\Http\Request;

class CommandeCuisinierController extends Controller
{
    public function store(Request $request)
    {
        set_time_limit(500);
        $qty = collect($request->qty)->filter(function ($value) {
            return $value !== null;
        })->values();
        $detail = [];
        foreach ($request->products_ids as $i => $id) {
            if (isset($qty[$i]) && $qty[$i] !== null) {
                $detail[] = [
                    "product_id" => $id,
                    "qty" => $qty[$i]
                ];
            }
        }
        $order = new CuisinierOrder();
        $order->name = $request->name;
        $order->restau = $request->restau;
        $order->detail = $detail;
        $order->save();

        dispatch(new SendEmailOrderQueueJob($order));

        return redirect("/");
    }
}
