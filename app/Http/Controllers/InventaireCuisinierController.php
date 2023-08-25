<?php

namespace App\Http\Controllers;

use App\Mail\InventaireSummary;
use App\Models\CuisinierInventaire;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class InventaireCuisinierController extends Controller
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
        $order = new CuisinierInventaire();
        $order->name = $request->name;
        $order->detail = $detail;
        $order->save();

        // Mail::to("admin@cucinanapoli.com")->send(new InventaireSummary($order));

        return redirect("/");
    }
}
