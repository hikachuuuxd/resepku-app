export default function CardChild({children})
{
    return(
    <div className={"bg-white min-w-full h-max-content p-6 text-sm lg:text-base shadow-lg" }>
        {children}
    </div>
    )
}