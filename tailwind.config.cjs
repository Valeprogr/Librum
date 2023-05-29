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
      "mdd" : '700px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        "dark" : "#26282A",
        "card" : "#FFFFFF",
        "background" : "#f5f5f5",
        "input" : "#dbd7d2",
        "hover" : "#2C3539"
      
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide"),require('@tailwindcss/line-clamp')],
}