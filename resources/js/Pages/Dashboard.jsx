import { Head } from '@inertiajs/react';
export default function Dashboard()
{
    return(
        
        <>
        <Head title='Jurnal PKL'/>
        <div className='w-full h-12 bg-gradient-to-r from-[#6867AC] to-[#CE7BB0] shadow-lg flex items-center'>
            <div className='' style="background-image: url(assets/icons/LOGO SMK 1.png)"> </div>
            <h4 className='text-white px-2  tracking-widest '> Jurnal Skensa</h4>
        </div>
        </>
    )
}