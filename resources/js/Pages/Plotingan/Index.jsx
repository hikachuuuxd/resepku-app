import { Head, Link, useForm, usePage} from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';

import { router } from '@inertiajs/react';


export default function Index(props)
{
    const perusahaans = props.perusahaans;
    const gurus = props.gurus;
    const {data, setData, post,  put, delete: destroy, processing, errors, reset} = useForm({
        perusahaan_id: '',
        guru_id: '',
        siswa_id: ''

    });

    return(

        <AuthenticatedLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Plotingan</h2>}
        >
            
        <Head title='plotingan' />

        <div className="py-12">
                <div className="mx-auto sm:px-6 lg:px-8 space-y-6">

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <h2>Form Plotingan</h2>
                        <form >
                            <div>
                                <InputLabel htmlFor="list" value='perusahaan'/>
                                <TextInput 
                                    id="perusahaan_id"
                                    list="perusahaan"
                                    name="perusahaan_id"

                                    
                                />

                                <datalist id='perusahaan'>
                                    {perusahaans.map(perusahaan => (
                                        <option  id={perusahaan.id} >{perusahaan.name}</option>
                                    ))}
                                </datalist>
                            </div>

                            <div>
                                <InputLabel htmlFor="list" value='guru'/>
                                <TextInput 
                                    id="guru_id"
                                    list="guru"
                                    name="guru_id"

                                    
                                />

                                <datalist id='guru'>
                                    {gurus.map(guru => (
                                       <option id={guru.id} value={guru.name}></option>
                                    ))}
                                </datalist>

                            </div>

                            
                        </form>
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <p>Data Plotingan PKL</p>
                        
                    </div>

                </div>
            </div>


        </AuthenticatedLayout>
        
        
    );
}
