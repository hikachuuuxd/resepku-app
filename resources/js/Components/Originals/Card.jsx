export default function Card({children, title = 'Card Title', status="belum dikonfirmasi", className = '', key})
{
    return(
    <div className={`w-full h-max-content bg-[#6867AC] rounded my-4`} key={key}>
        <div className="text-white flex justify-between p-3">
            <div className="ps-3 text-base lg:text-lg " >{title}</div>
            <div className="pe-3 text-sm lg:text-base font-thin text-rose-700">{status}</div>
        </div>
        <div className={"bg-white min-w-full h-max-content p-6 text-sm lg:text-base shadow-lg" + className }>
            {children}
        </div>
    </div>
    )
}