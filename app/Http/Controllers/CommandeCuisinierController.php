<?php

namespace App\Http\Controllers;

use App\Mail\OrderSummary;
use App\Models\CuisinierOrder;
use Barryvdh\DomPDF\Facade\Pdf;
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
        // $pdf = Pdf::loadView('pdf.order-summary', compact("order"));
        // $order->pdf = $pdf;

        // Mail::to("admin@cucinanapoli.com")->send(new OrderSummary($order));

        return redirect("/");
    }
}
