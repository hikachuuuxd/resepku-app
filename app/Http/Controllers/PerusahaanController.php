<?php

namespace App\Http\Controllers;

use App\Events\KonfirmasiPengajuan;
use App\Models\Jurusan;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Inertia\Response;
use App\Models\Pengajuan;
use App\Models\Perusahaan;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Collection;

class PerusahaanController extends Controller

{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Perusahaan/Index', [
            'perusahaans' => Perusahaan::latest()->get()
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
    public function edit(Perusahaan $perusahaan)
    {

    }
    
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Perusahaan $perusahaan)
    {
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Perusahaan $perusahaan)
    {

        
    }

    public function createKesediaan(Perusahaan $perusahaan)
    {
        return Inertia::render('Perusahaan/Kesediaan', [
            'perusahaan' => $perusahaan,
            'jurusans' => Jurusan::get()
        ]);
    }

    public function storeKesediaan(Request $request, Perusahaan $perusahaan)
    {
        $jurusans = $request->jurusan_id;
        $total = $request->total;

        $input = collect([]);
        for($i = 0; $i < count($jurusans); $i++){
            $inputs[$jurusans[$i]] = ['total' => $total[$i]];
        }

    
        $perusahaan->jurusans()->attach($inputs);
        dd($inputs);
    }

    public function active(Perusahaan $perusahaan)
    {
        $perusahaan->update([
            'active' => 1
        ]);
    }

    /*

    [0 , 1, 2 ,3]

    */
}
