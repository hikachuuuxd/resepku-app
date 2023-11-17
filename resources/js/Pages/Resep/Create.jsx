import Layout from "@/Layouts/AuthLayout";
import { useState } from "react";
import { router, usePage } from "@inertiajs/react";  

export default function Create(){

  
    const { files } = usePage().props
    const [preview, setPreview] = useState('');
    const [images, setImage] = useState('')
    const [value, setValue] = useState({
        title: '',
        description: '',
    })
    const [bahan, setBahan] = useState('')
    const [langkah, setLangkah] = useState('')
    const [bahans, setBahans] = useState([]);
    const [langkahs, setLangkahs] = useState([]);

    const listBahan = bahans.map((bahan, index) => (<li key={index}>{bahan}</li>))
    const listLangkah = langkahs.map((langkah, index) => (<li key={index}>{langkah}</li>))

    function handleSubmit(e) {
        e.preventDefault()
        router.post(route('resep.store'), {
            title: value.title,
            description: value.description,
            image: images,
            bahans: bahans,
            langkahs: langkahs
        } )
      }
    return(
        <Layout >
      <form onSubmit={handleSubmit}>

        <div className="grid grid-flow-row gap-4 mx-0 px-0 md:px-4 overflow-x-scroll lg:mx-40 ">
                <div className="grid grid-flow-row gap-2">
                    <span className="text-cyan-900 font-semibold">Tulis Resepmu...</span>
                    <div className="flex flex-col gap-2">
                        <label>Judul</label>
                        <input type="text" 
                            name="title" 
                            className="px-2 py-1 rounded" 
                            value={value.title}
                            onChange={(e) => setValue({...value, title: e.target.value})}
                            />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label id="des">Deskripsi</label>
                        <textarea name="description" 
                            id="des" cols="30" rows="5"
                            value={value.description}
                            onChange={(e) => setValue({...value, description: e.target.value})}
                            ></textarea>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-cyan-900 font-semibold">Bahan-bahan</label>
                    <div className="grid grid-cols-5 gap-3">
                    <input type="text" 
                        name="bahans" 
                        className="px-2 py-1 rounded col-span-4"
                        value={bahan}
                        onChange={e => setBahan(e.target.value)}
                        />
                    <button 
                    type="button"
                        onClick={() => {
                            setBahans([
                                ...bahans,
                                bahan
                        ]);
                        }}
                        className="bg-cyan-900 text-white rounded">+ item</button>
                    </div>

                    <ul className="list-disc ms-8 my-2">
                        {listBahan}
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-cyan-900 font-semibold">Langkah Pembuatan</label>
                    <div className="grid grid-cols-5 gap-3">
                    <input type="text" 
                        name="langkahs" 
                        className="px-2 py-1 rounded col-span-4" 
                        value={langkah}
                        onChange={e => setLangkah(e.target.value)}
                        />
                    <button 
                        type="button"
                        onClick={() => {
                            setLangkahs([
                                ...langkahs,
                                 langkah 
                        ]);
                        }}
                        className="bg-cyan-900 text-white rounded">+ item</button>
                    </div>
                    <ol className="ms-8 my-2 list-decimal">
                        {listLangkah}
                    </ol>
                </div>
                <div className={preview.length > 1 ? 'w-80' : 'w-0'}> <img src={preview} type="" alt="image" className="object-contain" width={100} height={100} /></div>
                <div className="flex flex-col gap-2">
                    <label id="foto">Upload foto Masakan</label>
                    <input  id="image"
                        type="file"
                        name="image"
                        onInput={(e) => setPreview(URL.createObjectURL(e.target.files[0]))}
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                                    
                 </div>
                <button type="submit" name="submit" className="capitalize w-full py-2 rounded bg-cyan-900 text-white">terbitkan resep</button>
            </div>
      </form>
       
        </Layout>
    )
}