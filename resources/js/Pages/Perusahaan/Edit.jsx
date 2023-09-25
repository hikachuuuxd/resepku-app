import { Head, Link, useForm, usePage} from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import { useState } from 'react';

import { router } from '@inertiajs/react';


export default function Edit(props)
{
    
    let perusahaan = props.perusahaan
    const { files } = usePage().props
    
    const [preview, setPreview] = useState(perusahaan.image);
    const [images, setImage] = useState(perusahaan.image)
    const {data, setData, post,  delete: destroy, processing, errors, put, reset} = useForm({
        name: perusahaan.name, 
        alamat: perusahaan.alamat, 
        detail: perusahaan.detail,
        dikonfirmasi: false,
        active: false,
    });



    const update = (e) => {
        e.preventDefault();

        router.post(route('perusahaan.update', perusahaan.id), {
            _method: 'put',
            name: data.name,
            alamat: data.alamat,
            detail: data.detail, 
            image: images
        });
                
    };

    
    return(
        <AuthenticatedLayout
        user={props.auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Perusahaan</h2>}>

        <Head title='edit perusahaan' />

        <div className="py-12">
                <div className="mx-auto sm:px-6 lg:px-8 space-y-6">

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <h2>Form Pengajuan tempat Praktik Kerja Lapangan</h2>
                        <form onSubmit={update} >
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
                            <div className='my-2'>
                            <embed src={preview} type="" ></embed>
                            </div>
                            <div className='mt-4'>
                                <InputLabel htmlFor="image" value="image"/>
                                <TextInput 
                                    id="image"
                                    type="file"
                                    name="image"
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onInput={(e) => setPreview(URL.createObjectURL(e.target.files[0]))}
                                    onChange={(e) => setImage(e.target.files[0])}
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

                   
                </div>
            </div>
        </AuthenticatedLayout>
    )
}