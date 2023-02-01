/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Titillium: ['Titillium Web', 'sans-serif']
    },
    screens: {
      'sm': '480px',
      
      'md': '800px',
    
      'lg': '1024px',
      
      'xl': '1150px',
      
      '2xl': '1536px',
      
    }
  },
  plugins: [],
}