
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';

export default function Layout({children, className}){
    return(
        <>
        <Navbar />
        <div className="mx-2 md:mx-4 lg:mx-10 my-16 ">
            <div className={className}>
            {children}
            </div>
        </div>
        <Footer />
        </>

    )
}