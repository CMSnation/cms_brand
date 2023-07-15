<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Response;

class TestController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request): Response
    {
        return inertia('test');
    }
}