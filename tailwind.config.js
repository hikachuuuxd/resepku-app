import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                poppins: ['Poppins']
            },
            backgroundImage: {
                logo: "url('/assets/icons/LOGOSMK1.png')",
            },
            colors: {
                'primary': '#6867AC',
                'secundary': '#CE7BB0'
            },
            boxShadow: {
                '3xl': '0px -5px 15px -10px rgba(0, 0, 0, 0.8)',
                'medium': '5px 0px 10px -10px rgba(0, 0, 0, 0.8)',
              },
            
        },
    },

    plugins: [forms],
};
