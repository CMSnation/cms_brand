<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Contact extends Model
{
    use HasFactory;

    public function Message(): HasMany
    {
        return $this->hasMany(Message::class);
    }


    // 🌟 send message
    public function send($request)
    {
        $this->create([
            'name' => $request->name,
            'email' => $request->email,
            'message' => $request->message,
        ]);
    }

    public function getall()
    {
        return $this->all();
    }

    
}