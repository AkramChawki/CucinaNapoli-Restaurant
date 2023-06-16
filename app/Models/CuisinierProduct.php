<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CuisinierProduct extends Model
{
    use HasFactory;

    protected $fillable = [
        'designation',
        'imputation',
        'unite',
        'category_id',
        'Stock',
    ];

    public function category()
    {
        return $this->belongsTo(CuisinierCategory::class);
    }
}
