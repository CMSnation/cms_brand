<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // declare variable $product yang menuju ke table product
        $product = DB::table('news');
        // hapus semua data yang ada di table product dengan truncate()
        $product->truncate();

        // declare variable $data yang berisi array data yang nanti akan dimasukan ke table product

        // data :
        // $table->string('title');
        // $table->string('slug');
        // $table->string('image');
        // $table->text('content');
        // $table->boolean('status');,
        // 
        $data = [
            [
                'title' => 'Panti Asuhan Berhasil Membangun Rumah Baru',
                'slug' => 'piyama-wanita-jerman',
                'image' => 'https://picsum.photos/200/300',
                'content' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.',
                'published' => true,
            ],
            [
                'title' => 'Panti Asuhan Berhasil Membangun Kantor Baru',
                'slug' => 'piyama-wanita-itali',
                'image' => 'https://picsum.photos/200/300',
                'content' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.',
                'published' => true,
            ],
            [
                'title' => 'Panti Asuhan Berhasil Membangun Kantor Baru',
                'slug' => 'piyama-wanita-itali',
                'image' => 'https://picsum.photos/200/300',
                'content' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.',
                'published' => true,
            ],
            [
                'title' => 'Panti Asuhan Berhasil Membangun Kantor Baru',
                'slug' => 'piyama-wanita-itali',
                'image' => 'https://picsum.photos/200/300',
                'content' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.',
                'published' => true,
            ],
            [
                'title' => 'Panti Asuhan Berhasil Membangun Kantor Baru',
                'slug' => 'piyama-wanita-itali',
                'image' => 'https://picsum.photos/200/300',
                'content' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.',
                'published' => true,
            ],
            [
                'title' => 'Panti Asuhan Berhasil Membangun Kantor Baru',
                'slug' => 'piyama-wanita-itali',
                'image' => 'https://picsum.photos/200/300',
                'content' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.',
                'published' => true,
            ],
            [
                'title' => 'Panti Asuhan Berhasil Membangun Kantor Baru',
                'slug' => 'piyama-wanita-itali',
                'image' => 'https://picsum.photos/200/300',
                'content' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.',
                'published' => true,
            ],
            [
                'title' => 'Panti Asuhan Berhasil Membangun Kantor Baru',
                'slug' => 'piyama-wanita-itali',
                'image' => 'https://picsum.photos/200/300',
                'content' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.',
                'published' => true,
            ],
            [
                'title' => 'Panti Asuhan Berhasil Membangun Kantor Baru',
                'slug' => 'piyama-wanita-itali',
                'image' => 'https://picsum.photos/200/300',
                'content' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.',
                'published' => true,
            ],
            [
                'title' => 'Panti Asuhan Berhasil Membangun Kantor Baru',
                'slug' => 'piyama-wanita-itali',
                'image' => 'https://picsum.photos/200/300',
                'content' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.',
                'published' => true,
            ],
        ];
        $product->insert($data);
    }
}
