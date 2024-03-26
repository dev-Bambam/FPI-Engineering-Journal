/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "1024px",
      lg: "1224px",
      xl: "1440px"
    },
    extend: {
      colors:{
        fpiGreen: '#309229',
        veryLightGray: 'hsl(0, 0%, 98%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        ashWhite: '#E5E7E9',
      }
    },
    container:{
      center: true,
      padding:{
        // md:'2rem'
      }
    }  
  },
  plugins: [],
}

