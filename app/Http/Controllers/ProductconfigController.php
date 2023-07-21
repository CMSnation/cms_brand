<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ProductconfigController extends Controller
{
    public function __invoke(Product $product)
    {

        return inertia('admin/productconfig/productconfig', [
            'products' => $product->getall(),
        ]);
    }

    public function create(Request $request, Product $product)
    {
        $product->addData($request);
        return redirect()->back();
    }
}
