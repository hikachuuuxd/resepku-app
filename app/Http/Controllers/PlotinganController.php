<?php

namespace App\Http\Controllers;

use App\Models\Perusahaan;
use App\Models\Plotingan;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;

class PlotinganController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Plotingan/Index', [
            'plotingans' => Plotingan::latest()->get(),
            'perusahaans' => Perusahaan::latest()->get(),
            'gurus' => User::whereHas('roles', function($query) {
                $query->where('role_id', 3);
            })->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Plotingan $plotingan)
    {
        $validate = $request->validate([
            'perusahaan_id'=> 'required',
            'guru_id' => 'required',
            
        ]);

        Plotingan::create($validate)->siswas()->attach($request->input('siswa_id'));
        dd($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(Plotingan $plotingan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Plotingan $plotingan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Plotingan $plotingan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Plotingan $plotingan)
    {
        //
    }
}
