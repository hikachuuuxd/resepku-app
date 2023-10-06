import Dashboard from "../Dashboard";
import DropdownCard from "@/Components/Originals/DropdownCard";
import Card from "@/Components/Originals/Card";
import { Head, Link, useForm, usePage} from '@inertiajs/react';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import Home from "../Home";

export default function PengajuanIndex({auth})
{
    const {data, post, error, setData} = useForm();
    return(
        <Dashboard
            menu={'Pengajuan Tempat PKL'}
        >

    <DropdownCard title={'Form Pengajuan Tempat PKL'}>
                
        <div className="flex-column pt-8 pb-4">
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
        </div>
        <div className="flex-column py-4">
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
        </div>
        <div className="flex-column py-4">
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
        </div>
        
        <PrimaryButton>Submit</PrimaryButton>
        </DropdownCard>

    <DropdownCard title={'Form Pengajuan Tempat PKL'}>
                
        <div className="flex-column pt-8 pb-4">
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
        </div>
        <div className="flex-column py-4">
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
        </div>
        <div className="flex-column py-4">
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
        </div>
        
        <PrimaryButton>Submit</PrimaryButton>
        </DropdownCard>

        <Card title="Nama Perusahaan">
        <div className="my-2 break-all "><span className="font-bold">Alamat :</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ut ad nulla quia, eum accusantium similique voluptatem, ratione quod deleniti modi itaque tenetur? Quidem aliquam quas repudiandae quam aliquid eius accusantium cumque maiores! Magnam nisi, veritatis excepturi quaerat expedita obcaecati!</div>
            <div className="my-2"> <span className="font-bold">Kontak :</span> 00000000000000</div>

        <PrimaryButton>Lihat Bukti</PrimaryButton>
        </Card>



        </Dashboard>
    )
}