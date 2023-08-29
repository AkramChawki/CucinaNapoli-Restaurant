<?php

namespace App\Http\Controllers;

use App\Mail\InventaireSummary;
use App\Models\CuisinierInventaire;
use Barryvdh\DomPDF\Facade\Pdf;
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
            if (isset($qty[$i]) && $qty[$i] !== null) {
                $detail[] = [
                    "product_id" => $id,
                    "qty" => $qty[$i]
                ];
            }
        }
        $order = new CuisinierInventaire();
        $order->name = $request->name;
        $order->detail = $detail;
        $order->save();
        $pdf = Pdf::loadView('pdf.order-summary', compact("order"));
        $order->pdf = $pdf;

        Mail::to("admin@cucinanapoli.com")->send(new InventaireSummary($order));

        return redirect("/");
    }
}
