import NavLink from '@/Components/NavLink';
import { Head, Link} from '@inertiajs/react';


export default function Dashboard({children, menu})
{
    return(
        
        <>
        <Head title='Jurnal PKL'/>
        <div className='w-full h-12 top-0 left-0 right-0 bg-gradient-to-r from-[#6867AC] to-[#CE7BB0] shadow-lg flex items-center z-50 fixed md:h-14'>
            <img src="/assets/icons/LOGOSMK1.png" className='bg-containt aspect-auto w-8 ms-4 md:w-10'  alt="" />
            <h4 className='text-white px-4 md:text-xl tracking-widest '>Jurnal Skensa 
            <span className='ms-4 lg:ms-6'>|</span>
            < span className='ms-2 text-xs md:text-sm lg:text-base'>{menu ? menu : 'Dashboard'}</span>
            </h4>
        </div>


        <main className='py-20 px-2 md:ps-20 lg:ps-72 min-w-fit min-h-screen bg-slate-100 box-border text-slate-800'>
            {children}
        
        </main>

        <div className='w-full h-12 bg-white shadow-3xl fixed bottom-0 right-0 left-0 flex justify-around self-center md:fixed  md:left-0 md:top-0 md:bottom-0 md:block md:w-16 md:h-[100vh] z-10 md:shadow-medium lg:w-64 '>
        <NavLink href={route('pengajuan.index')} >
            <button className='lg:flex md:py-1  md:mb-10 md:mt-24 inline md:block lg:ms-8 lg:mt-32'>
            <img src="/assets/icons/group.png" alt="" className='w-6 h-6 md:ms-4 lg:w-8 lg:h-8  lg:mx-2' /> 
            <p className='hidden lg:block lg:mx-2 lg:text-lg'>Plotingan</p>
            </button>
        </NavLink>

        <NavLink href={route('pengajuan.index')} active={route().current('pengajuan.index')}  >
            <button className='inline md:block  md:py-1  md:my-10 lg:flex  lg:ms-8 '>
            <img src="/assets/icons/architecture.png" alt="" className='w-7 h-7 md:ms-4 lg:w-8 lg:h-8 lg:mx-2' />
            <p className='hidden lg:block lg:mx-2 lg:text-lg'>Perusahaan</p>
            </button>
        </NavLink>
        
        <NavLink href={route('jurnal')} active={route().current('jurnal')}>
            <button className='inline md:block md:py-1  md:my-10 lg:flex  lg:ms-8 '>
            <img src="/assets/icons/edit.png" alt="" className='w-6 h-6 md:ms-4 lg:w-8 lg:h-8 lg:mx-2' />
            <p className='hidden lg:block lg:mx-2 lg:text-lg'>Jurnal</p>
            </button>
        </NavLink>

        <NavLink href={route('pengajuan.index')} active={route().current('pengajuan.index')} >
            <button className='inline md:block  md:py-1  md:my-10  lg:flex  lg:ms-8'> 
            <img src="/assets/icons/user.png" alt="" className='w-6 h-6 md:ms-4 lg:w-8 lg:h-8 lg:mx-2' />
            <p className='hidden lg:block lg:text-lg'>Profile</p>
            </button>
        </NavLink>
        </div>
        </>
    )
}