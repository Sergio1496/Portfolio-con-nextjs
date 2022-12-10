/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: 'burtons',
      },
      colors: {
        'background': '#1F1D36',
        'tarjetas': '#3F3351',
        'textos': '#864879',
        'textos2': '#E9A6A6',
      },
    },
    
  },
  plugins: [],
}