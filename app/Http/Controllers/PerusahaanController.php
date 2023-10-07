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

    }
    
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Pengajuan $pengajuan)
    {
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pengajuan $pengajuan)
    {

        
    }



    public function active(Pengajuan $pengajuan)
    {
        $pengajuan->update([
            'active' => 1
        ]);
    }
}
