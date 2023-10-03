<?php

namespace App\Http\Controllers;

use App\Events\KonfirmasiPengajuan;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Inertia\Response;
use App\Models\Pengajuan;
use Illuminate\Support\Facades\Validator;


class PerusahaanController extends Controller

{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Perusahaan/Index', [
            'perusahaans' => Pengajuan::with('siswa')->latest()->get()
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
    public function store(Request $request, Pengajuan $pengajuan)
    {
        Validator::make($request->all(), [
            'name' =>  'required',
            'alamat' =>  'required',
            'detail' =>  'required',
            'image' => 'required|mimes:pdf' 
        ])->validate();
        
            $image = $request->file('image');
            $filename = '/assets/perusahaan/'.time().'.'.$image->extension();  
            $image->move(public_path().'/assets/perusahaan/', $filename);
    
            $pengajuan = Pengajuan::create([
                'user_id' => Auth::id(),
                'name' => $request->name,
                'alamat' => $request->alamat,
                'detail' => $request->detail,
                'image' => $filename
            ]);
        dd($pengajuan->image);

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
    public function edit(Pengajuan $pengajuan)
    {
        return Inertia::render('Perusahaan/Edit', [
            'perusahaan' => $pengajuan
        ]);
    }
    
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Pengajuan $pengajuan)
    {
        Validator::make($request->all(), [
            'name' =>  ['required'],
            'alamat' =>  ['required'],
            'detail' =>  ['required'],
            'image' => 'mimes:pdf'
        
        ])->validate();
 
       
        $image = $request->file('image');
        if($image)
        {

            $path = public_path().$pengajuan->image;
            if(file_exists($path)){
              unlink($path);
            }

        $filename = '/assets/perusahaan/'.time().'.'.$image->getClientOriginalExtension();  
        $image->move(public_path().'/assets/perusahaan/', $filename);


        $pengajuan->update([
                'image' => $filename
            ]);
        }
        
        $pengajuan->update([
                'name' => $request->name,
                'alamat' => $request->alamat,
                'detail' => $request->detail,
        ]);

        dd($pengajuan);
        return redirect()->route('perusahaan.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pengajuan $pengajuan)
    {

        if($pengajuan->image){
            $path = public_path().$pengajuan->image;
            if(file_exists($path)){
              unlink($path);
            }
        }
        $pengajuan->delete();
        
    }

    public function konfirmasi(Pengajuan $pengajuan)
    {
        $update = $pengajuan->update([
            'dikonfirmasi' => 1
        ]);

        KonfirmasiPengajuan::dispatchIf($update, $pengajuan);

    }

    public function active(Pengajuan $pengajuan)
    {
        $pengajuan->update([
            'active' => 1
        ]);
    }
}
