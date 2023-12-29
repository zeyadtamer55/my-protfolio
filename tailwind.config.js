/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors : {
                "main-black" : "#141414",
                "main-white" : "#f5f5f5",
                "main-wheat" : "#e9e1c5"

            },
            fontFamily : {
                "algeros" : 'algeros'
            } 
        },
        screens : {
            "xs" : "530px",

            'sm': '640px',
      
            'md': '768px',
      
            'lg': '1024px',
      
            'xl': '1280px',
      
            '2xl': '1536px',

            'xmd': '900px',

        }
    },
    plugins: [],
}

