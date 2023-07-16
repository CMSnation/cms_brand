<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Response;
use App\Clara\Clara;

class Admin extends Controller
{
    public function __invoke(Request $request): Response
    {
        // $aboutFile = Clara::localizedMarkdownPath('about.md');
        return inertia('admin/admin');
    }
}