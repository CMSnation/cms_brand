<?php
// ivan - 16 Juli 2023
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\Inertia;
use App\Models\Content;


class ContentController extends Controller
{
    // menggunakan Invokeable controller untuk menghandle request
    public function __invoke(Request $request): Response
    {
        return Inertia::render('Test');
    }
}