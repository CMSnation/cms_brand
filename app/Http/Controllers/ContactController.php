<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Webinfo;

class ContactController extends Controller
{

    public function __invoke(Webinfo $webinfo)
    {

        return inertia('contact/contact', [
            'name' => $webinfo->getname(),
        ]);
    }
}