<?php

namespace App\Listeners;

use App\Events\KonfirmasiPengajuan;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Models\Perusahaan;

class StorePerusahaan
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(KonfirmasiPengajuan $event): void
    {
        $pengajuan = $event->perusahaan;
        Perusahaan::create([
            'name' => $pengajuan->name,
            'alamat' => $pengajuan->alamat,
            'detail' => $pengajuan->detail,
            'image' => $pengajuan->image,
        ]);
    }
}
