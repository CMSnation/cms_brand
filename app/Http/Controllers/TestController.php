<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\Inertia;

class TestController extends Controller
{
    /**
     *
     * Handle the incoming request.
     */
    public function __invoke(Request $request): Response
    {
        $products = [
            'id' => 1,
            'name' => 'Product 1',
            'description' => 'This is the description for Product 1',
            'price' => 100,
            'image' => 'https://picsum.photos/200/300',
        ];
        // return inertia('test', $products);
        return Inertia::render('test', [
            'products' => [
                'name' => 'John Doe',
                'age' => 30,
            ],
        ]);
    }
}
