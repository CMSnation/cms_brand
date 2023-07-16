<?php
// ivan - 16 Juli 2023
namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;


class ContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // declare variable $product yang menuju ke table product
        $product = DB::table('contents');
        // hapus semua data yang ada di table product dengan truncate()
        $product->truncate();

        // declare variable $data yang berisi array data yang nanti akan dimasukan ke table product

        // data :
        // 'title',
        // 'slug',
        // 'type',
        // 'content',
        // 'image',
        // 'published',
        // 
        $data = [
            [
                'id' => Str::uuid(), // generate uuid
                'title' => 'Piyama Wanita Jerman',
                'slug' => 'piyama-wanita-jerman',
                'type' => 'informal',
                'content' => 'Piyama wanita jerman ini sangat nyaman digunakan untuk tidur',
                'image' => 'https://picsum.photos/200/300',
                'published' => true,
            ],
            [
                'id' => Str::uuid(), // generate uuid
                'title' => 'Baju Renang Anak',
                'slug' => 'baju-renang-anak',
                'type' => 'informal',
                'content' => 'Baju renang anak ini sangat nyaman digunakan untuk berenang',
                'image' => 'https://picsum.photos/200/300',
                'published' => true,
            ],
            [
                'id' => Str::uuid(), // generate uuid
                'title' => 'Kemeja Pria Formal',
                'slug' => 'kemeja-pria-formal',
                'type' => 'formal',
                'content' => 'Kemeja pria formal ini sangat nyaman digunakan untuk acara formal',
                'image' => 'https://picsum.photos/200/300',
                'published' => true,
            ],
        ];
        $product->insert($data);
    }
}