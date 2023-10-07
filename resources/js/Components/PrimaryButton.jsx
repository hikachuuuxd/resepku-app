export default function PrimaryButton({ className = '', disabled, children, onClick, ...props}) {
    return (
        <>
        <button
            {...props}
            onClick={onClick}
            className={
                ` py-2 px-4 float-right my-2 text-sm lg:text-base bg-violet-200 hover:bg-primary hover:text-white rounded tracking-wide transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
        <div className="clear-right"></div>
        </>
    );
}


// inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150