<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class WebinfoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // declare variable $product yang menuju ke table product
        $product = DB::table('webinfos');
        // hapus semua data yang ada di table product dengan truncate()
        $product->truncate();


        $data = [
            [
                'tag'   => 'general',
                'title' => 'web_name',
                'alias' => 'Nama Perusahaan',
                'description' => 'Panti Asuhan Kristamelon',
                'status' => true,
            ],
            [
                'tag'   => 'general',
                'title' => 'web_description',
                'alias' => 'Deskripsi Perusahaan',
                'description' => 'ini adalah panti asuhan',
                'status' => true,
            ],
            [
                'tag'   => 'general',
                'title' => 'web_logo',
                'alias' => 'Logo Perusahaan',
                'description' => 'https://picsum.photos/200/300',
                'status' => true,
            ],
            [
                'tag'   => 'general',
                'title' => 'web_address',
                'alias' => 'Alamat Perusahaan',
                'description' => 'Jl. Raya Bogor',
                'status' => true,
            ],
            [
                'tag'   => 'general',
                'title' => 'web_phone',
                'alias' => 'Nomor Telepon Perusahaan',
                'description' => '08123456789',
                'status' => true,
            ],
            // about
            [
                'tag'  => 'about',
                'title' => 'about_title',
                'alias' => 'Judul Halaman About',
                'description' => 'Tentang Kami',
                'status' => true,
            ],
            [
                'tag' => 'about',
                'title' => 'about_content',
                'alias' => 'Konten Halaman About',
                'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                'status' => true,
            ],
            [
                'tag' => 'about',
                'title' => 'about_image',
                'alias' => 'Gambar Halaman About',
                'description' => 'https://picsum.photos/200/300',
                'status' => true,
            ],
            [
                'tag' => 'about',
                'title' => 'about_video',
                'alias' => 'Video Halaman About',
                'description' => 'https://www.youtube.com/embed/tgbNymZ7vqY',
                'status' => true,
            ],
        ];

        // insert data ke table webinfos
        $product->insert($data);
    }
}
