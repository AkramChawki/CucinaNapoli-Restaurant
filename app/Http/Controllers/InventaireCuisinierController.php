<?php

namespace App\Http\Controllers;

use App\Jobs\SendEmailInventoryQueueJob;
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

        dispatch(new SendEmailInventoryQueueJob($order));

        return redirect("/");
    }
}
