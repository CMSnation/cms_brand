<?php
// ivan - 15 Juli 2023
namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        // declare variable $product yang menuju ke table product
        $products = DB::table('products');
        // hapus semua data yang ada di table product dengan truncate()
        $products->truncate();

        // declare variable $data yang berisi array data yang nanti akan dimasukan ke table product
        $data = [
            [
                'id' => Str::uuid(), // generate uuid
                'name' => 'Product 1',
                'description' => 'This is the description for Product 1',
                'price' => 100,
                'image' => 'https://picsum.photos/200/300',
            ],
            [
                'id' => Str::uuid(), // generate uuid
                'name' => 'Product 2',
                'description' => 'This is the description for Product 2',
                'price' => 200,
                'image' => 'https://picsum.photos/200/300',
            ],
            [
                'id' => Str::uuid(), // generate uuid
                'name' => 'Product 3',
                'description' => 'This is the description for Product 3',
                'price' => 300,
                'image' => 'https://picsum.photos/200/300',
            ],
            [
                'id' => Str::uuid(), // generate uuid
                'name' => 'Product 4',
                'description' => 'This is the description for Product 4',
                'price' => 400,
                'image' => 'https://picsum.photos/200/300',
            ],
            [
                'id' => Str::uuid(), // generate uuid
                'name' => 'Product 5',
                'description' => 'This is the description for Product 5',
                'price' => 500,
                'image' => 'https://picsum.photos/200/300',
            ],
        ];

        // insert data ke table product
        $products->insert($data);
    }
}