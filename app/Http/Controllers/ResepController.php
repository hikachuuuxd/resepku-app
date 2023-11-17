<?php

namespace App\Http\Controllers;

use App\Models\Bahan;
use App\Models\Langkah;
use App\Models\Like;
use App\Models\Resep;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Contracts\Database\Eloquent\Builder;

class ResepController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Resep $resep)
    {

        return Inertia::render('Resep/Index', [
            'reseps' => $resep->latest()->where('user_id', Auth::id())->get(),
            'likes' => Like::get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Resep/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $bahans = collect($request->bahans);
        $langkahs = collect($request->langkahs);
        $image = $request->file('image');
        $filename = '/assets/image/'.time().'.'.$image->extension();  
        $image->move(public_path().'/assets/image/', $filename);
        
       $resep = Resep::create([
            'user_id' => Auth::id(),
            'title' => $request->title,
            'description' => $request->description,
            'image' => $filename,
        ]);
    
    for($i = 0; $i < count($bahans); $i++){

        $resep->langkahs()->saveMany([
            new Bahan(['item' => $bahans[$i]]),
        ]);
    }

    for($i = 0; $i < count($langkahs); $i++){

        $resep->langkahs()->saveMany([
            new Langkah(['item' => $langkahs[$i]]),
        ]);
    }

    return redirect()->route('resep.index');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $resep = Resep::findOrFail($id);
        $bahans = Bahan::where('resep_id', $id)->get();
        $langkah = Langkah::where('resep_id', $id)->get();
        return Inertia::render('Resep/Show', compact('resep', 'bahans', 'langkah'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Resep $resep)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Resep $resep)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Resep $resep)
    {
        //
    }
}
