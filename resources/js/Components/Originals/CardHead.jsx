import { useState } from "react";
export default function CardHead({title = 'Card Title', children})
{
    const [menu, setMenu] = useState(false);
    const openMenu = (item) => {
        menu ? item = false : item = true
        setMenu(item)
    }
    return(
        <>
        <div className="text-white flex justify-between p-3">
            <div className="ps-3 text-base lg:text-lg " >{title}</div>
            <button onClick={openMenu} className="pe-3">
                <i className="border-b-2 w-4 my-1 border-white block"></i>
                <i className="border-b-2 w-4 my-1 border-white block"></i>
                <i className="border-b-2 w-4 my-1 border-white block"></i>
            </button>
        </div>
        <div className={!menu ? "hidden":"bg-primary w-max-content h-max-content  absolute right-0 "}>
            {children}
        </div>
        </>
    )
}