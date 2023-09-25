import { Head, Link, useForm, usePage} from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';

import { router } from '@inertiajs/react';
// import { Inertia } from '@inertiajs/inertia';

export default function Index(props)
{
    const { flash } = usePage().props
    let perusahaans = props.perusahaans;
    const {data, setData, post,  put, delete: destroy, processing, errors, reset} = useForm({
        name: '', 
        alamat: '', 
        detail: '',
        image: null,
        dikonfirmasi: false,
        active: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('perusahaan.store'));
      
        
    };

   const hapus = (id) => {
    router.delete(`/perusahaan/${id}`)

   };

   const konfirmasi = (id) => {
        router.put(route('perusahaan.konfirmasi', id))
   }
   
   const active = (id) => {
        router.put(route('perusahaan.active', id))
   }
   
    return(

        <AuthenticatedLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Perusahaan</h2>}
        >
            
        <Head title='perusahaan' />

        <div className="py-12">
                <div className="mx-auto sm:px-6 lg:px-8 space-y-6">

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <h2>Form Pengajuan tempat Praktik Kerja Lapangan</h2>
                        <form onSubmit={submit} encType='multipart/form-data'>
                            <div>
                                <InputLabel htmlFor="text" value="name"/>
                                <TextInput 
                                    id="name"
                                    type="text"
                                    value={data.name}
                                    name="name"
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={(e) => setData('name', e.target.value)}
                                    
                                />

                                <InputError message={errors.name} className="mt-2" />
                            </div>
                            <div className='mt-4'>
                                <InputLabel htmlFor="text" value="alamat"/>
                                <TextInput 
                                    id="alamat"
                                    type="text"
                                    value={data.alamat}
                                    name="alamat"
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={(e) => setData('alamat', e.target.value)}
                                />
                                <InputError message={errors.alamat} className="mt-2" />
                            </div>
                            <div className='mt-4'>
                                <InputLabel htmlFor="text" value="detail"/>
                                <TextInput 
                                    id="detail"
                                    type="text"
                                    value={data.detail}
                                    name="detail"
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={(e) => setData('detail', e.target.value)}
                                />
                                <InputError message={errors.detail} className="mt-2" />
                            </div>
                            <div className='mt-4'>
                                <InputLabel htmlFor="image" value="image"/>
                                <TextInput 
                                    id="image"
                                    type="file"
                                    name="image"
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={(e) => setData('image', e.target.files[0])}
                                />
                                <InputError message={errors.image} className="mt-2" />
                            </div>
                            <div className='mt-4'>
                            <PrimaryButton disabled={processing}>
                                kirim
                            </PrimaryButton>
                            </div>
                        </form>
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <p>Data Pengajuan perusahaan</p>
                        <table className='mt-10 table-auto border-collapse border border-slate-400'>
                            <thead>
                                <tr className=''>
                                    <td className='border border-slate-300 py-2 px-4'>no</td>
                                    <td className='border border-slate-300 py-2 px-4'>Yang mengajukan</td>
                                    <td className='border border-slate-300 py-2 px-4'>Nama Perusahaan</td>
                                    <td className='border border-slate-300 py-2 px-4'>Alamat </td>
                                    <td className='border border-slate-300 py-2 px-4'>detail Perusahaan</td>
                                    <td className='border border-slate-300 py-2 px-4'>bukti</td>
                                    <td className='border border-slate-300 py-2 px-4'>konfirmasi</td>
                                    <td  className='border border-slate-300 py-2 px-4'>status</td>
                                    <td colSpan={2} className='border border-slate-300 py-2 px-4'>Action</td>
                             
                                </tr>

                            </thead>
                            <tbody>
                            {
                                perusahaans.map((perusahaan, index) => 
                                <tr key={index}>
                                    <td className='border border-slate-300  px-4'>{index + 1}</td>
                                    <td className='border border-slate-300  px-4'>{perusahaan.siswa.name}</td>
                                    <td className='border border-slate-300  px-4'>{perusahaan.name}</td>
                                    <td className='border border-slate-300  px-4'>{perusahaan.alamat}</td>
                                    <td className='border border-slate-300  px-4'>{perusahaan.detail}</td>
                                    <td className='border border-slate-300  px-4'><embed src={perusahaan.image} type="" /></td>
                                    <td className='border border-slate-300  px-4'><button onClick={() => konfirmasi(perusahaan.id)}className='bg-blue-500 p-2 rounded shadow text-white'>konfirmasi</button></td>
                                    <td className='border border-slate-300  px-4'><button onClick={() => active(perusahaan.id)}className='bg-green-500 p-2 rounded shadow text-white'>active</button></td>
                                    <td className='border border-slate-300  px-4'>
                                        <Link href={route('perusahaan.edit', perusahaan.id)}><button className='bg-yellow-400 p-2 rounded shadow'>update</button></Link>
                                        
                                    </td>
                                    <td className='border border-slate-300  px-4'>
                                        <button onClick={() => hapus(perusahaan.id)} className='bg-red-800 text-white p-2 rounded shadow'>Hapus</button>
                               
                                    </td>
                                </tr>
                            )
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </AuthenticatedLayout>
        
        
    );
}
