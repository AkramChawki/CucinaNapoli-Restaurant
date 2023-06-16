<?php

use App\Http\Controllers\ProfileController;
use App\Models\ClotureCaisse;
use App\Models\CuisinierCategory;
use App\Models\CuisinierOrder;
use App\Models\CuisinierProduct;
use App\Models\ErreurCuisine;
use App\Models\Number;
use App\Models\Reclamation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Str;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/cloture-caisse', function () {
    return Inertia::render('ClotureCaisse/ClotureCaisse');
});

Route::post('/cloture-caisse', function (Request $request) {

    $image = $request->signature;
    $image = str_replace('data:image/png;base64,', '', $image);
    $image = str_replace(' ', '+', $image);
    $imageName = Str::random(10) . '.jpeg';
    Storage::disk('public')->put("/signatures/$imageName", base64_decode($image));

    ClotureCaisse::create(array_merge($request->all(), [
        "signature" => "/signatures/$imageName"
    ]));

    return redirect("/");
});

Route::get('/cloture-caisse/ajouter', function () {
    return Inertia::render('ClotureCaisse/Ajouter');
});

Route::get('/reclamations', function () {
    return Inertia::render('Reclamations/Reclamations');
});

Route::post('/reclamations', function (Request $request) {

    Reclamation::create($request->all());
    return redirect("/");
});

Route::get('/reclamations/ajouter', function () {
    return Inertia::render('Reclamations/Ajouter');
});

Route::get('/erreur-cuisine', function () {
    return Inertia::render('ErreurCuisine/ErreurCuisine');
});

Route::post('/erreur-cuisine', function (Request $request) {
    ErreurCuisine::create($request->all());
    return redirect("/");
});

Route::get('/erreur-cuisine/ajouter', function () {
    return Inertia::render('ErreurCuisine/Ajouter');
});

Route::get('/commande-cuisinier', function () {
    return Inertia::render('CommandeCuisinier/CommandeCuisinier');
});

Route::get('/commande-cuisinier/commander', function () {
    return Inertia::render('CommandeCuisinier/Commander', [
        "categories" => CuisinierCategory::with('products')->get()
    ]);
});
Route::post('/commande-cuisinier/commander', [App\Http\Controllers\CommandeCuisinierController::class, 'store']);

Route::get('/inventaire', function () {
    return Inertia::render('Inventaire/Inventaire');
});

Route::get('/inventaire/stock', function () {
    return Inertia::render('Inventaire/Stock', [
        "categories" => CuisinierCategory::with('products')->get()
    ]);
});

Route::post('/inventaire/stock', function (Request $request) {
    $request->validate([
        "name" => "required",
        "ids" => "required|array",
        "stocks" => "required|array",
    ]);

    foreach ($request->ids as $i => $id) {
        if ($request->stocks[$i]) {
            CuisinierProduct::find($id)->update([
                "Stock" => $request->stocks[$i]
            ]);
        }
    }

    return redirect("/");
});

Route::get('/numeros', function () {
    return Inertia::render('Numeros/Numeros');
});

Route::post('/numeros', function (Request $request) {
    foreach ($request->numbers as $number) {
        Number::create([
            "number" => $number
        ]);
    }

    return redirect("/");
});

Route::get('/numeros/ajouter', function () {
    return Inertia::render('Numeros/Ajouter');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
