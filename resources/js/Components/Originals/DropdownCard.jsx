import { useState } from "react"
export default function DropdownCard({title, children, className})
{
    const [open, setOpen] = useState(false)
    const handleClick = (val) => {
        open ? val = false : val = true 
        setOpen(val)
    }

    const arrow= ['hover:border-secundary ', 'border-r-2 ', 'border-b-2 ','p-1 ','inline-block ']

    
    return(
        <>
    <div onClick={handleClick} className="cursor-pointer w-full h-max-content p-2 bg-[#6867AC] rounded flex justify-between my-4 ">
        <div className="text-white ms-2 text-sm lg:text-base p-2">{title ? title : 'Dropdown Card'}</div>
        <button onClick={handleClick}  className="me-4 "><i className={open ? 'transition-transform ease-in duration-100 rotate-45 hover:border-slate-800 border-r-2 border-b-2 p-1 inline-block ' : 'transition-transform duration-100 ease-out rotate-[-135deg] mt-4 hover:border-slate-800 border-r-2 border-b-2 p-1 inline-block ' }></i></button>
    </div>
   
    <div className={!open ? 'hidden' : 'transition-transform  delay-150  ease-in-out delay-150 bg-white w-full h-max-content rounded my-2 text-slate-800 text-xs lg:text-base md:text-sm px-10 pb-4 ' + className}>
        {children}
    </div>
        
        
        </>
    )
}