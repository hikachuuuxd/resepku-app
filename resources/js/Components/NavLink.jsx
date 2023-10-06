import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center px-1   border-t-2   md:border-t-0 md:block md:border-r-2 transition duration-150 ease-in-out focus:outline-none box-border' +
                (active
                    ? 'text-[#CE7BB0] border-[#CE7BB0]'
                    : 'border-transparent text-gray-500 hover:text-[#CE7BB0] hover:border-[#CE7BB0] focus:text-gray-700 focus:border-[#CE7BB0] ') +
                className
            }
        >
            {children}
        </Link>
    );
}

{/* <Link
{...props}
className={
    'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
    (active
        ? 'border-indigo-400 text-gray-900 focus:border-indigo-700 '
        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 ') +
    className
}
>
{children}
</Link> */}
