import { router } from "@inertiajs/react"; 
import { useEffect, useState } from "react";
export default function Suka({auth, likes, data}){
const [value, setValue] = useState(true);

const like = likes.filter(el => el.resep_id == data.id)
const check = like.map(el => el.user_id)
const setLike = () => {
    check.includes(auth.user.id) ? setValue(!value) : setValue(value) 
}


const bStatus = like.filter(el => el.user_id == auth.user.id )
        let btitle = 'suka'
        const disukai = 'px-4 my-2 py-2 w-full bg-slate-800 rounded text-white hover:text-black hover:bg-slate-300'
        const suka = 'px-4 my-2 py-2 w-full bg-slate-300 rounded text-black hover:text-white hover:bg-slate-800'
        bStatus.map(el => el.user_id == auth.user.id ? btitle = 'disukai' : btitle )
        const handleLike = (e) => {
            e.preventDefault()
            router.post(route('resep.like'), {
                status: value,
                resepId: data.id
            } )
        }
    return(
        <form onSubmit={handleLike}>
        <button
        value={value}
        onClick={setLike}
        className={btitle == 'disukai' ? disukai : suka}>{btitle} </button>
     
        </form>
    )
}