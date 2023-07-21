<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Webinfo extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'status',
    ];

    // function to get all data


    // 🌟 get all data list
    public function getall()
    {
        return $this->all();
    }

    // 🌟 get company name
    public function getname()
    {
        return $this->where('title', 'web_name')->first()->description;
    }
    // ⚡ update company name
    public function updatename($request)
    {
        $name = $this->where('title', 'web_name')->first();
        $name->description = $request->name;
        $name->save();
    }


    // 🌟 get company desc
    public function getdesc()
    {
        return $this->where('title', 'web_description')->first()->description;
    }
    // ⚡ update company desc
    public function updatedesc($request)
    {
        $desc = $this->where('title', 'web_description')->first();
        $desc->description = $request->description;
        $desc->save();
    }


    // 🌟 get company logo
    public function getlogo()
    {
        return $this->where('title', 'web_logo')->first()->description;
    }
    // ⚡ update company logo
    public function updatelogo($request)
    {
        $logo = $this->where('title', 'web_logo')->first();
        $logo->description = $request->logo;
        $logo->save();
    }

    // 🌟 get company address
    public function getaddress()
    {
        return $this->where('title', 'web_address')->first()->description;
    }
    // ⚡ update company address
    public function updateaddress($request)
    {
        $address = $this->where('title', 'web_address')->first();
        $address->description = $request->address;
        $address->save();
    }


    // 🌟 get company phone
    public function phone()
    {
        return $this->where('title', 'web_phone')->first()->description;
    }
    // ⚡ update company phone
    public function updatephone($request)
    {
        $phone = $this->where('title', 'web_phone')->first();
        $phone->description = $request->phone;
        $phone->save();
    }

    // 🌟 get company whatsapp
    public function whatsapp()
    {
        return $this->where('title', 'web_whatsapp')->first();
    }
    // ⚡ update company phone
    public function updateWhatsapp($request)
    {
        $whatsapp = $this->where('title', 'web_whatsapp')->first();
        $whatsapp->description = $request->whatsapp;
        $whatsapp->save();
    }


    // 🌟 get company telegram
    public function telegram()
    {
        return $this->where('title', 'web_telegram')->first();
    }
    // ⚡ update company telegram
    public function updateTelegram($request)
    {
        $telegram = $this->where('title', 'web_telegram')->first();
        $telegram->description = $request->telegram;
        $telegram->save();
    }


    // 🌟 get company email
    public function email()
    {
        return $this->where('title', 'web_email')->first()->description;
    }
    // 🌟 get company facebook
    public function facebook()
    {
        return $this->where('title', 'web_facebook')->first()->description;
    }
    // 🌟 get company instagram
    public function instagram()
    {
        return $this->where('title', 'web_instagram')->first()->description;
    }
    // 🌟 get company twitter
    public function twitter()
    {
        return $this->where('title', 'web_twitter')->first()->description;
    }
    // 🌟 get company youtube
    public function youtube()
    {
        return $this->where('title', 'web_youtube')->first()->description;
    }
    // 🌟 get company linkedin
    public function linkedin()
    {
        return $this->where('title', 'web_linkedin')->first()->description;
    }
    public function updateLinkedin($request)
    {
        $linkedin = $this->where('title', 'web_linkedin')->first();
        $linkedin->description = $request->linkedin;
        $linkedin->save();
    }
    // ⚡ABOUT PAGE ⚡
    // 🌟 get company about title
    public function getAboutTitle()
    {
        return $this->all()->where('title', 'about_title')->first();
    }
    public function updateAboutTitle($request)
    {
        $aboutTitle = $this->where('title', 'about_title')->first();
        $aboutTitle->description = $request->aboutTitle;
        $aboutTitle->save();
    }

    // 🌟 get company about description
    public function getAboutContent()
    {
        return $this->all()->where('title', 'about_content')->first();
    }
    public function updateAboutDesc($request)
    {
        $aboutDesc = $this->where('title', 'about_content')->first();
        $aboutDesc->description = $request->aboutDesc;
        $aboutDesc->save();
    }

    // 🌟 get company about image
    public function getAboutImage()
    {
        return $this->all()->where('title', 'about_image')->first();
    }
    public function updateAboutImage($request)
    {
        $aboutImage = $this->where('title', 'about_image')->first();
        $aboutImage->description = $request->aboutImage;
        $aboutImage->save();
    }

    // 🌟 get company about video
    public function getAboutVideo()
    {
        return $this->all()->where('title', 'about_video')->first();
    }
    public function updateAboutVideo($request)
    {
        $aboutVideo = $this->where('title', 'about_video')->first();
        $aboutVideo->description = $request->aboutVideo;
        $aboutVideo->save();
    }
    // ⚡PRODUCT PAGE ⚡
    // 🌟 get company product title
    public function getProductTitle()
    {
        return $this->all()->where('title', 'product_title')->first();
    }
    public function updateProductTitle($request)
    {
        $productTitle = $this->where('title', 'product_title')->first();
        $productTitle->description = $request->productTitle;
        $productTitle->save();
    }
}