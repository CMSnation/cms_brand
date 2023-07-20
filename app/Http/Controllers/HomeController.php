<?php

namespace App\Http\Controllers;
// Ivan | 19 Agustus 2023 

use Illuminate\Http\Request;
use Inertia\Response;
use App\Models\Webinfo;
use App\Models\Product;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function __invoke(Request $request, Webinfo $webinfo, Product $product): Response
    {
        // 👇🏻 get all content
        $web_product = $product::all()->take(3);
        // error_log($web_name);
        return Inertia::render('home', [
            'web_name' => $webinfo->getname(),
            'web_description' => $webinfo->getdesc(),
            'web_product' => $web_product,
        ]);



        // 👇🏻 return view inertia dengan data web name
        // return inertia('home')->with($content);
    }
}