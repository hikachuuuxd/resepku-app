import Resep from "@/Components/Resep"
import Layout from "@/Layouts/AuthLayout"
import { router } from "@inertiajs/react";  
export default function Index ({reseps, likes}){

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
        <Layout>
        <div className="flex flex-col place-content-center gap-4">

            <div>Resep Terbaru</div>
            <div className="flex flex-wrap justify-start items-start">
                {listresep}
            </div>
        </div>
        </Layout>
    )
}