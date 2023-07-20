<?php
// ivan - 19 Juli 2023
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\News;


class NewsController extends Controller
{
    public function __invoke(News $news)
    {

        $news = $news::all();
        return inertia('news/news', [
            'news' => $news,
        ]);
    }
}