import { Head, Link} from '@inertiajs/react';

export default function Dashboard()
{
    return(
        
        <>
        <Head title='Jurnal PKL'/>
        <div className='w-full h-12 bg-gradient-to-r from-[#6867AC] to-[#CE7BB0] shadow-lg flex items-center z-50 fixed md:h-20'>
            <img src="/assets/icons/LOGOSMK1.png" className='bg-containt aspect-auto w-8 mx-3 md:w-10'  alt="" />
            <h4 className='text-white px-2 md:text-xl tracking-widest '> Jurnal Skensa</h4>
        </div>



        <div className='w-full h-12 bg-white shadow-3xl  absolute bottom-0 right-0 left-0 flex justify-around p-2 md:absolute  md:left-0 md:block md:w-16  md:h-[100vh] z-10 md:shadow-medium lg:w-80'>
        <Link href={route('pengajuan.index')} >
            <button className='lg:flex md:px-2 md:pb-5 md:mt-24 inline md:block lg:ms-8 lg:mt-32'>
            <img src="/assets/icons/group 1.png" alt="" className='lg:mx-2' /> 
            <p className='hidden lg:block lg:mx-2 lg:text-xl'>Plotingan</p>
            </button>
        </Link>

        <Link href={route('pengajuan.index')} >
            <button className='inline md:block md:px-2 md:py-5 lg:flex lg:ms-8 '>
            <img src="/assets/icons/architecture 1.png" alt="" className='lg:mx-2' />
            <p className='hidden lg:block lg:mx-2 lg:text-xl'>Perusahaan</p>
            </button>
        </Link>
        
            <div className='inline md:block md:px-2 md:py-5 lg:flex lg:ms-8 '>
            <img src="/assets/icons/edit 1.png" alt="" className='lg:mx-2' />
            <p className='hidden lg:block lg:mx-2 lg:text-xl'>Jurnal</p>
            </div>

            <div className='inline md:block md:px-2 md:py-5  lg:flex lg:ms-8'> 
            <img src="/assets/icons/icon user.png" alt="" className='lg:mx-2' />
            <p className='hidden lg:block lg:text-xl'>Profile</p>
            </div>
        </div>
        </>
    )
}