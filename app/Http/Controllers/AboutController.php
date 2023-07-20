<?php

namespace App\Http\Controllers;

use App\Clara\Clara;
use App\Models\Webinfo;
use Illuminate\Http\Request;
use Inertia\Response;

class AboutController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, Webinfo $webinfo): Response
    {
        // $aboutFile = Clara::localizedMarkdownPath('about.md');
        return inertia('about', [
            // 'about' => str()->markdown(file_get_contents($aboutFile)),
            'title' => $webinfo->getAboutTitle()->description,
            'content' => $webinfo->getAboutContent()->description,
            'image' => $webinfo->getAboutImage()->description,
            'video' => $webinfo->getAboutVideo()->description,
        ]);
    }
}