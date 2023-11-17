import { Head, Link } from "@inertiajs/react";
import { router } from "@inertiajs/react"; 
import Navbar from '@/Components/Navbar';
import Resep from "@/Components/Resep"
import Layout from "@/Layouts/AuthLayout"
export default function Home({reseps, likes, auth}){
    const detail = (id) => {
        router.get(route('resep.show', id))
   }
   
    const listresep = reseps.map((data, index) => 
    <Resep key={index} 
         onClick={() => detail(data.id)}
        suka={likes.filter(el => el.resep_id == data.id).length}
        image={data.image}
        title={data.title}
        description={data.description}
    />
)
    return(
        <>
        <Head title="Welcome" />
         <div className='fixed top-0 left-0 right-0 grid grid-flow-col justify-around items-center py-2 text-white bg-cyan-700 capitalize tracking-wide'>
            <Link href='/'><div className='text-sm md:text-base lg:text-lg cursor-pointer'>ResepKu</div></Link>
            <div className='flex gap-x-4 text-sm'>
               
            {auth.user ? (
                        <>
                         <Link
                            href={route('resep.index')}
                        >
                            Dashboard
                        </Link>
                    </>
                    ) : (
                        <>
                        <Link href='/login'>Login</Link>
                        <Link href='/register'>Register</Link>
                    </>
                    )}
               
            </div>
        </div>

        <div className="flex flex-col justify-center gap-4">

        <div>Resep Terbaru</div>
        <div className="flex flex-wrap place-content-center items-start">
            {listresep}
        </div>
        </div>
        </>
    )
}

