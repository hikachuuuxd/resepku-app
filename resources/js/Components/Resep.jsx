export default function Resep({image, suka, title, description, children, ...props}){
    return(
        <div className="grid grid-flow-row justify-start content-start p-3 gap-2 items-center w-60" {...props}>
            <div className="w-full h-full">
            <img src={image} width={1000} height={1000} className="object-cover aspect-[4/3]" />
            </div>
            <div className="text-slate-500 text-sm">{suka} {' '} orang menyukai ini</div>
            <div className="text-cyan-800 capitalize tracking-wide">{title}</div>
            <div className="text-slate-950 text-sm word line-clamp-3" >{description}</div>
            {children}
        </div>
    )
}