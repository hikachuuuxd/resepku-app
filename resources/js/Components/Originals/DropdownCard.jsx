import { useState } from "react"
export default function DropdownCard({title, children, className})
{
    const [open, setOpen] = useState(false)

    return(
        <>
    <div onClick={() => setOpen(!open)} className="cursor-pointer w-full h-max-content p-2 bg-[#6867AC] rounded flex justify-between my-4 ">
        <div className="text-white ms-2 text-sm lg:text-base p-2">{title ? title : 'Dropdown Card'}</div>
        <button onClick={() => setOpen(!open)}  className="me-4 "><i className={open ? 'rotate-45 hover:border-slate-800 border-r-2 border-b-2 p-1 inline-block ' : ' rotate-[-135deg] mt-4 hover:border-slate-800 border-r-2 border-b-2 p-1 inline-block ' }></i></button>
    </div>
   
    <div className={' bg-white w-full h-max-content rounded my-2 text-slate-800 text-xs lg:text-base md:text-sm px-10 pb-4 ' + className}>
        {open && children}
    </div>
        </>
    )
}