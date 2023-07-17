/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        bodyFont:['DM Sans', 'sans-serif'],
        titleFont:['Poppins', 'sans-serif']
      },
      colors:{
        bodyColor:"#212428",
        LightText:"#c4cfde",
        boxbg:"linear-gradient(145deg, #le2024,#23272b",
        designColor:"#ff014f",
      },
      boxshadow:{
        shadowone:"10px 10px 19px #lcle22, -10px -10px 19px #262a2e",
      },
    },
  },
  plugins: [],
}

