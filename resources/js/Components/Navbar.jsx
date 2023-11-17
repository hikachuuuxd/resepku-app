import { Link, Head } from '@inertiajs/react';
export default function Navbar(auth){
    return(
        <div className='fixed top-0 left-0 right-0 grid grid-flow-col justify-around items-center py-2 text-white bg-cyan-700 capitalize tracking-wide'>
            <div className='text-sm md:text-base lg:text-lg'>ResepKu</div>
            <div className='flex gap-x-4 text-sm'>
                {
                    auth.user ? (
                        <>
                            <Link href='/login'>Login</Link>
                            <Link href='/register'>Register</Link>
                        </>
                    ): 
                    (
                        <>
                            <Link href={route('resep.create')}>tulis resep</Link>
                            <Link href={route('logout')} method="post" as="button">logout</Link>
                        </>
                    )
                }
            </div>
        </div>
    )
}