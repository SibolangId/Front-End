/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        button:'rgb(12,159,100)'
      }
    },
    fontFamily: {
      Logo: ['Logo', 'sans-serif'],
      engplot: ['engplot'],
    }
  },
  plugins: [],
}

