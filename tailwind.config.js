/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
      DarkCyan: 'hsl(158, 36%, 37%)',
	    Cream: 'hsl(30, 38%, 92%)',
	    VeryDarkBlue: 'hsl(212, 21%, 14%)',
	    DarkGrayishBlue: 'hsl(228, 12%, 48%)',
	    White: 'hsl(0, 0%, 100%)',
      Background: 'rgb(233,6,206)',
      background: 'linear-gradient(90deg, rgba(233,6,206,1) 0%, rgba(203,67,46,1) 35%, rgba(255,0,74,1) 100%)',
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'serif'],
        Fraunces: ['Fraunces', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
