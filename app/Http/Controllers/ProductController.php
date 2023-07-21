<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function __invoke(Request $request, Product $product)
    {
        return inertia('products/products', [
            'products' => $product->getall(),
        ]);
    }

    // ⚡create data
    public function addProduct(Request $request, Product $product){
        $product->addData($request);
        return redirect()->back();
    }
}