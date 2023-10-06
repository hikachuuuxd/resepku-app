import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                'w-full mt-1  rounded focus:outline-none focus:border-b-1 focus:border-x-0 focus:border-t-0  focus:rounded-none focus:border-[#6867AC] focus:ring-0 ' +
                className
            }
            ref={input}
        />
    );
});



// border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm 