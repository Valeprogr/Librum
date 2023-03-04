/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        "text" : "#242829",
        "text-hover" : "#F8EDE3",
        "CTA" : "#3795BD",
        "card" : "#fff",
        "background" : "#F9F5E7",
        "mainColor" : "#A7727D"
      
      }
    },
  },
  plugins: [],
}