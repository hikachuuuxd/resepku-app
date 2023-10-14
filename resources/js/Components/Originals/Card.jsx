import { useState } from "react"


export default function Card({children,  className = ''})
{
    return(
    <div className={`w-full h-max-content bg-[#6867AC] rounded my-4 relative`} >
        {children}

    </div>
    )
}

