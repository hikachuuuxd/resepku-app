export default function Card({children, title = 'Card Title', status="belum dikonfirmasi", className = ''})
{
    return(
        <div className={`w-full h-max-content bg-[#6867AC] rounded my-4`}>
        <div className="text-white flex justify-between p-2">
            <div className="ps-3 text-base lg:text-lg " >{title}</div>
            <div className="pe-3 text-sm lg:text-base font-thin text-rose-700">{status}</div>
        </div>
        <div className={"bg-white min-w-full h-max-content p-4 text-sm lg:text-base " + className }>
            {children}
        </div>
    </div>
    )
}