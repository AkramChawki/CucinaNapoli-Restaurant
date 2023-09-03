<?php

namespace App\Http\Controllers;

use App\Mail\InventaireSummary;
use App\Models\CuisinierInventaire;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Mail;

function generate_pdf_and_save($view,$data, $file_name, $directory)
{
    $pdf = new \mikehaertl\wkhtmlto\Pdf(view($view, $data)->render());
    $pdf->binary = base_path('vendor/h4cc/wkhtmltopdf-amd64/bin/wkhtmltopdf-amd64');
    if (!$pdf->saveAs(public_path("storage/$directory/$file_name"))) {
        $error = $pdf->getError();
        dd($error);
    }
    return asset("storage/$directory/$file_name");
}
class InventaireCuisinierController extends Controller
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
        $order = new CuisinierInventaire();
        $order->name = $request->name;
        $order->restau = $request->restau;
        $order->detail = $detail;
        $order->save();
        $pdf_name = "Inventaire-".$order->created_at->format("d-m-Y")."-".$order->id.".pdf";
        generate_pdf_and_save("pdf.inventaire-summary",["order"=>$order], $pdf_name, "documents");
        Mail::to("admin@cucinanapoli.com")->send(new InventaireSummary($order, $pdf_name));
        $order->pdf = $pdf_name;
        $order->save();
        return redirect("/");
    }
}
