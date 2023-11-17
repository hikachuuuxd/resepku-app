import Layout from "@/Layouts/AuthLayout";

export default function Show({resep, bahans, langkah}){
    const listbahans = bahans.map((bahan, id) => 
        <li key={id}>{bahan.item}</li>
    )

    const listlangkah = langkah.map((data, index) => 
        <li key={index}>{data.item}</li>
    )

    return(
        <Layout className='grid grid-flow-row place-content-center'>
     
        <div className="flex flex-col gap-3">
        <div className="w-96">
                <img src={resep.image} className="object-contain aspect-[4/3] " width={1080} height={1080} />
            </div>
            <div className="text-base lg:text-lg text-cyan-900 font-bold w-96 ">{resep.title}</div>
            <div className="text-base w-96 ">{resep.description}</div>
            <div className="text-base lg:text-lg text-cyan-900 font-bold">Bahan</div>
            <ul className="list-none w-96 ">
            {listbahans}
            </ul>
            <div className="text-base lg:text-lg text-cyan-900 font-bold">Langkah</div>
            <ol className="list-decimal ms-3 w-96 ">
            {listlangkah}
            </ol>
     </div>
   
        </Layout>
    )
}