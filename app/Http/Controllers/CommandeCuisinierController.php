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
        $pdf_name = "Commande-".$order->created_at->format("d-m-Y")."-".$order->id.".pdf";
        $pdf = Pdf::loadView('pdf.inventaire-summary', compact("order"))
        ->save(public_path("storage/documents/$pdf_name"));
        
        Mail::to("admin@cucinanapoli.com")->send(new OrderSummary($order, $pdf_name));
        $order->pdf = $pdf_name;
        $order->save();
        return redirect("/");
    }
}
