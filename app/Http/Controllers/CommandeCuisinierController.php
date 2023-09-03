<?php

namespace App\Http\Controllers;

use App\Mail\OrderSummary;
use App\Models\CuisinierOrder;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Mail;

function generate_pdf_and_save($view, $file_name, $directory)
{
    $pdf = new \mikehaertl\wkhtmlto\Pdf(view($view)->render());
    $pdf->binary = base_path('vendor/h4cc/wkhtmltopdf-amd64/bin/wkhtmltopdf-amd64');
    if (!$pdf->saveAs(public_path("storage/$directory/$file_name"))) {
        $error = $pdf->getError();
        dd($error);
    }
    return asset("storage/$directory/$file_name");
}
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
        generate_pdf_and_save("pdf.order-summary", $pdf_name, "documents");
        Mail::to("admin@cucinanapoli.com")->send(new OrderSummary($order, $pdf_name));
        $order->pdf = $pdf_name;
        $order->save();
        return redirect("/");
    }
}
