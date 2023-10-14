export default function ItemMenu ({children, className = " ", onClick})
{
    return(
    <button onClick={onClick} className={`px-4 py-3 text-xs lg:text-sm text-white lowercase hover:text-primary  hover:bg-white text-center ${className}`}>
        {children}
    </button>
    )
}