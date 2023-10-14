import Dashboard from "../Dashboard";
import Card from "@/Components/Originals/Card";
import CardChild from "@/Components/Originals/CardChild";
import CardHead from "@/Components/Originals/CardHead";
import MappingRecord from "@/Components/Originals/MappingRecord";
import ItemMenu from "@/Components/Originals/ItemMenu";
import PrimaryButton from "@/Components/PrimaryButton";
import { useState } from "react";
import { router } from "@inertiajs/react";  


export default function Index ({perusahaans})
{
    const [file, setFile] = useState(false)
    const handleFile = handle => {
        file ? handle = false : handle = true
        setFile(handle)
    } 

    const storeKesediaan = (id) => {
        router.get(route('perusahaan.create.kesediaan', id))
    } 

    return(
        <Dashboard title={'perusahaan'}>
{
     perusahaans.map((perusahaan, index) =>
        
       <MappingRecord key={index}>
        <Card >
        <CardHead title={perusahaan.name}>
            <ItemMenu className='border-b border-slate-400 hover:border-primary'> Edit</ItemMenu>
            <ItemMenu  className='border-b border-slate-400 hover:border-primary'>Delete</ItemMenu>
            <ItemMenu onClick={() => storeKesediaan(perusahaan.id)}>Tambah Kesediaan</ItemMenu>
        </CardHead>
        <CardChild>
        <div className="my-2 break-all "><span className="font-bold">Alamat :</span>{perusahaan.alamat}</div>
        <div className="my-2"> <span className="font-bold">Kontak :</span>{perusahaan.detail}</div>

        <PrimaryButton onClick={handleFile}>Lihat Bukti</PrimaryButton>
        </CardChild>
        </Card>
        
        <iframe src={perusahaan.image} className={!file ? "hidden" : "min-w-full max-w-fit h-screen"}></iframe>
        
       </MappingRecord>
        
    )   
    }

        </Dashboard>
    )
}