<?php

namespace App\Http\Controllers;

use App\Mail\InventaireSummary;
use App\Models\CuisinierInventaire;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Mail;

class InventaireCuisinierController extends Controller
{
    public function store(Request $request)
    {
        set_time_limit(500);
        Artisan::call("optimize:clear");
        $command1 = "composer install";
        exec("{$command1}");
        $command2 = "composer update";
        exec("{$command2}");
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
        $order->restau = $request->restau;
        $order->detail = $detail;
        $order->save();
        $pdf_name = "Inventaire-".$order->created_at->format("d-m-Y")."-".$order->id.".pdf";
        $pdf = Pdf::loadView('pdf.inventaire-summary', compact("order"))
            ->save(public_path("storage/documents/$pdf_name"));

        Mail::to("admin@cucinanapoli.com")->send(new InventaireSummary($order, $pdf_name));
        $order->pdf = $pdf_name;
        $order->save();
        return redirect("/");
    }
}
