<?php
// ivan - 15 Juli 2023
namespace App\Models;

use GuzzleHttp\Handler\Proxy;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;


class Product extends Model
{
    use HasFactory;

    // ngasih tau ke laravel isian apa aja yang boleh diisi
    protected $fillable = [
        'name',
        'description',
        'price',
        'image',
    ];

    // ngasih tau laravel kalo id (uuid) yang digunakan bukan auto increment
    public function getIncrementing()
    {
        return false;
    }

    // ngasih tau laravel kalo id (uuid) yang digunakan bukan integer melainkan string
    public function getKeyType()
    {
        return 'string';
    }


    // 🌟 get all data list
    public function getall()
    {
        $products = $this->all();

        foreach ($products as $product) {
            $product->image = Storage::url($product->image);
        }
        return $products;
    }

    // 🌟 update data
    public function updateData($request)
    {
        // $url = Storage::url('file.jpg', ['auth_user_id' => auth()->id()]);

        $data = $this->where('id', $request->id)->first();
        $data->name = $request->name;
        $data->description = $request->description;
        $data->price = $request->price;
        $data->image = Storage::move($request->image, 'images');
        $data->save();
    }

    // 🌟 delete data
    public function deleteData($request)
    {
        $data = $this->where('id', $request->id)->first();
        $data->delete();
    }

    // 🌟 add data

    public function addData($request)
    {
        $data = new Product();
        $data->id = Str::uuid();
        $data->name = $request->name;
        $data->description = $request->description;
        $data->price = $request->price;
        if ($request->hasFile('image')) {
            $data->image = Storage::putFile('public', $request->file('image'));
        }
        $data->save();

        // $image = $request->file('image');
        // $filename = $image->store('images');

        // $this->image = $filename;
        // $this->save();
    }
}