import { Head, Link } from "@inertiajs/react";
import { router } from "@inertiajs/react"; 
import Resep from "@/Components/Resep"
import { useEffect, useState } from "react";
import Suka from "@/Components/Button";
export default function Home({reseps, likes, auth}){
    const detail = (id) => {
        router.get(route('resep.show', id))
   }
   
   const [value, setValue] = useState(true);

    const listresep = reseps.map((data, index) => 
    {   
        
        const like = likes.filter(el => el.resep_id == data.id)
        return(
            <Resep key={index} 
            onClick={() => detail(data.id)}
           suka={like.length}
           image={data.image}
           title={data.title}
           description={data.description}
       >
        {auth.user ? <Suka data={data} likes={likes} auth={auth}/> : ''}
       </Resep>
        )
    }
    
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

        <div className="flex flex-col justify-start gap-4 my-16 mx-4 lg:mx-10">

        <div className="ps-4 lg:ps-20">Resep Terbaru</div>
        <div className="flex flex-wrap justify-start lg:justify-center content-center items-start">
            {listresep}
        </div>
        </div>
        </>
    )
}

