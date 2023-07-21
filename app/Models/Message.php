<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use HasFactory;

    public function create($request)
    {
        $this->create([
            'content' => $request->id,
            'email_id' => $request->email_id
        ]);
    }

    // 🌟 get all input
    public function getAll()
    {
        return $this->all();
    }

    // 🌟 get all function
    public function getByIndex($request)
    {
        // $data = Message::all()->where()->id('10');
    }
}
