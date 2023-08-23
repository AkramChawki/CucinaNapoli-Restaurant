<?php

namespace App\Http\Controllers;

use App\Mail\OrderSummary;
use App\Models\CuisinierOrder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class CommandeCuisinierController extends Controller
{
    public function store(Request $request)
    {
        $qty = collect($request->qty)->filter(function ($value) {
            return $value !== null;
        })->values();
        $detail = [];
        foreach ($request->products_ids as $i => $id) {
            $detail[] = [
                "product_id" => $id,
                "qty" => $qty[$i]
            ];
        }
        $order = new CuisinierOrder();
        $order->name = $request->name;
        $order->detail = $detail;
        $order->save();

        // Mail::to("admin@cucinanapoli.com")->send(new OrderSummary($order));

        return redirect("/");
    }
}
