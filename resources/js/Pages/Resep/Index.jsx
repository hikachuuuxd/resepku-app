import Suka from "@/Components/Button";
import Resep from "@/Components/Resep"
import Layout from "@/Layouts/AuthLayout"
import { Link, router } from "@inertiajs/react";  
export default function Index ({reseps, likes, auth}){

    const detail = (id) => {
        router.get(route('resep.show', id))
   }
   
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
            <Suka data={data} likes={likes} auth={auth}/>
        </Resep>
        )
    }
    )
    
    return(
        <Layout>
        <div className="flex flex-col place-content-center gap-4">

            <div>Resep Saya</div>
            <div className="flex flex-wrap justify-start items-start">
                {listresep.length == 0 ? <Link href="/dashboard/create" className="text-sm text-slate-700 capitalize cursor-pointer">Tulis resep</Link> : listresep}
            </div>
        </div>
        </Layout>
    )
}