<?php
// ivan - 16 Juli 2023
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\Inertia;
use App\Models\Content;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Log;

class TestController extends Controller
{

    protected $content = Content::class;
    public function __invoke(Request $request): Response
    {
        // get all content
        $get_all_content = $this->content::all();


        // return page inertia dengan data $get_all_content (cara 1)
        // return Inertia::render('test', [
        //     'content' => $get_all_content,
        // ]);

        // return page inertia dengan data $get_all_content (cara 2)
        return inertia('test')->with('content', $get_all_content);

        // return page inertia dengan data $get_all_content (cara 3)
        // return inertia('test', compact('get_all_content')); // compact = mengubah variable menjadi array, namun ingat
        // parameter yang dipass ke react harus sama dengan nama variable yang di pass ke compact ☝🏻
    }

    public function store(Request $request)
    {
        // ⚡Cara save request ke database ada 2 cara ⚡
        // 👇🏻 cara 1 : langsung save all() 
        // $save_request = $this->content::create($request->all());

        // 👇🏻 cara 2 : save satu satu
        $this->content::create(
            [
                // 👇🏻 Gausah pake ID karena di Model (Content) udah pake ramsey uuid di function boot-nya
                // 'id' => Str::uuid(), // generate uuid
                'title' => $request->title,
                'content' => $request->content,
            ]
        );

        // 👇🏻ini buat save ke database
        // $save_request->save();

        // 👇🏻ini buat redirect ke route yang ada di web.php (biasanya route lain)
        // return to_route('test');
        // 👇🏻ini buat prevent redirect ke route lain, jadi redirect ke halaman yang sama
        return redirect()->back();
    }
    public function edit(Request $request, Content $content)
    {
        // 👇🏻 Cari data yang sesuai dengan id yang di pass dari react
        $update_data = $content->find($request->id);
        // $out = new \Symfony\Component\Console\Output\ConsoleOutput();
        // $out->writeln($request);
        // 👇🏻 cek apakah data ada
        if ($update_data) {
            // 👇🏻 extract data yang di pass dari react, tapi hanya yang ada di $attributes
            $attributes = $request->only(['title', 'content']);

            // 👇🏻 update data yang ada di database
            $update_data->update($attributes);
        }

        // Redirect back to the previous page
        return redirect()->back();
    }

    public function delete(Request $request, Content $content)
    {

        // ⚡NOTES : delete data menggunakan method DELETE gabisa masukin value ke request, jadi harus pake parameter di route (web.php)
        // 👇🏻 Cari data yang sesuai dengan id yang di pass dari react
        $delete_data = $content->find($request->id);
        // buat debug aja
        $out = new \Symfony\Component\Console\Output\ConsoleOutput();
        $out->writeln($request->id);
        // $delete_data = $content->find("");
        if ($delete_data) {
            // 👇🏻 delete data yang ada di database
            $delete_data->delete();
        }

        // Redirect back to the previous page
        return redirect()->back();
    }
}
