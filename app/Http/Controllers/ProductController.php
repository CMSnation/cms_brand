<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function __invoke(Request $request)
    {
        return inertia('products/products', [
            'product' => [
                'id' => 1,
                'name' => 'Product 1',
                'description' => 'This is the description for Product 1',
                'price' => 100,
                'image' => 'https://picsum.photos/200/300',
            ],
        ]);
    }
}
