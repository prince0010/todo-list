/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: [ 
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            'light': '#F7F7F7',
            'dark': '#1c1917',
            'component': '#EEEEEEFA',
            'component-dark': '#3f3f46',
            'primary': '#FBD5B0',
            'danger': '#eF4444',
            'slash': '#292B12',
            'night': '#343333',
            'sun': '#FF9500',
            'addedc': '#FFA061'
            
          },
          transitionProperty:{
            'width': 'width' 
          }
    },
},
  plugins: [],
}
