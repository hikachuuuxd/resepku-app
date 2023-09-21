<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Inertia\Response;
use App\Models\Perusahaan;
use Illuminate\Support\Facades\Validator;


class PerusahaanController extends Controller

{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Perusahaan/Index', [
            'perusahaans' => Perusahaan::with('siswa')->latest()->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Perusahaan $perusahaan)
    {
        Validator::make($request->all(), [
            'name' =>  ['required'],
            'alamat' =>  ['required'],
            'detail' =>  ['required'],
            'file' =>  ['required']
            
        ])->validate();
   
  
            $filename = '/assets/perusahaan/'.time().'.'.$request->file->extension();  
            $request->file->move(public_path().'/assets/perusahaan/', $filename);
    
            $perusahaan = Perusahaan::create([
                'user_id' => Auth::id(),
                'name' => $request->name,
                'alamat' => $request->alamat,
                'detail' => $request->detail,
                'image' => $filename
            ]);
        dd($perusahaan->image);
           return redirect()->back()->with('message', 'Pengajuan berhasil di kirim');

    
        // $perusahaan->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Perusahaan $perusahaan)
    {

        if($perusahaan->image){
            $path = public_path().$perusahaan->image;
            if(file_exists($path)){
              unlink($path);
            }
        }
        $perusahaan->delete();
        
    }
}
