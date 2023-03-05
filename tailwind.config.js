/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class','[data-mode="dark"]'],
  content: [ 
    // Don't put spaces in the content
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extends: {
        colors: {
            'light': '#f9f9f9',
            'dark': '#1c1917',
            'component': '#FFF',
            'component-dark': '#3f3f46',
            'primary': '',
            'danger': '',
          }
    },
},
  plugins: [],
}
