<?php

namespace App\Http\Controllers;

use App\Models\Webinfo;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WebconfigController extends Controller
{
    public function __invoke(Webinfo $webinfo)
    {
        return inertia('admin/webconfig', [
            'data' => $webinfo->getall(),
        ]);
    }
    public function update(Request $request, Webinfo $webinfo)
    {
        $webinfo->updatedesc($request);
        
        return redirect()->back();
    }
}