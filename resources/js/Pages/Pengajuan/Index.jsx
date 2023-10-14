import Dashboard from "../Dashboard";
import { Head, Link, useForm, usePage} from '@inertiajs/react';
import DropdownCard from "@/Components/Originals/DropdownCard";
import Card from "@/Components/Originals/Card";
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import InputError from "@/Components/InputError";
import { router } from '@inertiajs/react';
import MappingRecord from "@/Components/Originals/MappingRecord";
import { useState } from "react";
import ItemMenu from "@/Components/Originals/ItemMenu";
import CardHead from "@/Components/Originals/CardHead";
import CardChild from "@/Components/Originals/CardChild";

export default function PengajuanIndex({auth, pengajuans})
{
    const [file, setFile] = useState(false)
    const handleFile = handle => {
        file ? handle = false : handle = true
        setFile(handle)
    } 
    const { flash } = usePage().props
    const {data, setData, post,  put, delete: destroy, processing, errors, reset} = useForm({
        name: '', 
        alamat: '', 
        detail: '',
        image: null,
    })

    const submit = (e) => {
        e.preventDefault();

        post(route('pengajuan.store'));
      
        
    };

    const hapus = (id) => {
        router.delete(`/pengajuan/${id}`)
    
       };
    
       const konfirmasi = (id) => {
            router.put(route('pengajuan.konfirmasi', id))
       }
       
       const active = (id) => {
            router.put(route('pengajuan.active', id))
       }
       
    return(
        <Dashboard
            menu={'Pengajuan Tempat PKL'}
        >

        <Head title="Perusahaan" />

    <DropdownCard title={'Form Pengajuan Tempat PKL'}>
    <form onSubmit={submit} encType='multipart/form-data'> 
        <div className="flex-column pt-8 pb-4">
        <InputLabel htmlFor="text" value="name"/>
            <TextInput 
            id="name"
            type="text"
            value={data.name}
            name="name"
            isFocused={true}
            onChange={(e) => setData('name', e.target.value)}                    
            />
        <InputError message={errors.name} className="mt-2" />
        </div>
        
        <InputLabel htmlFor="text" value="alamat"/>
            <TextInput 
            id="alamat"
            type="text"
            value={data.alamat}
            name="alamat"
            isFocused={true}
            onChange={(e) => setData('alamat', e.target.value)}
            />
        <InputError message={errors.alamat} className="mt-2" />

        <div className="flex-column py-4">
        <InputLabel htmlFor="text" value="detail"/>
            <TextInput 
            id="detail"
            type="text"
            value={data.detail}
            name="detail"
            isFocused={true}
            onChange={(e) => setData('detail', e.target.value)}
            />
        <InputError message={errors.detail} className="mt-2" />

        </div>
        <InputLabel htmlFor="image" value="image"/>
            <TextInput 
            id="image"
            type="file"
            name="image"
            isFocused={true}
            onChange={(e) => setData('image', e.target.files[0])}
            />
        <InputError message={errors.image} className="mt-2" />
        
        <PrimaryButton disabled={processing}>
            Submit
        </PrimaryButton>
    
    </form>
    </DropdownCard>
    
    {
     pengajuans.map((pengajuan, index) =>

       <MappingRecord key={index}>
        <Card >
        <CardHead title={pengajuan.name}>
            <ItemMenu className='border-b border-slate-400 hover:border-primary'> Edit</ItemMenu>
            <ItemMenu onClick={() => hapus(pengajuan.id)} className='border-b border-slate-400 hover:border-primary'>Delete</ItemMenu>
            <ItemMenu onClick={() => konfirmasi(pengajuan.id)}>Konfirmasi</ItemMenu>
        </CardHead>
        <CardChild>
        <div className="my-2 break-all "><span className="font-bold">Alamat :</span>{pengajuan.alamat}</div>
        <div className="my-2"> <span className="font-bold">Kontak :</span>{pengajuan.detail}</div>

        <PrimaryButton onClick={handleFile}>Lihat Bukti</PrimaryButton>
        </CardChild>
        </Card>
        <iframe src={pengajuan.image} className={!file ? "hidden" : "min-w-full max-w-fit h-screen"}></iframe>
       </MappingRecord>
        
    )   
    }



</Dashboard>
    )
}