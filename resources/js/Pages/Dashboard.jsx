import { Head, Link} from '@inertiajs/react';


export default function Dashboard({children})
{
    return(
        
        <>
        <Head title='Jurnal PKL'/>
        <Navbar />
        
     
        </>
    )
}


{/* <NavLink href={route('perusahaan.index')} active={route().current('perusahaan.index')} >
    <button className='inline md:block  md:py-1  md:my-10  lg:flex  lg:ms-8'> 
    <img src="/assets/icons/user.png" alt="" className='w-6 h-6 md:ms-4 lg:w-8 lg:h-8 lg:mx-2' />
    <p className='hidden lg:block lg:text-lg'>Profile</p>
    </button>
</NavLink> */}