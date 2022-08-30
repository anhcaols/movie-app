/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '540px',
      md: '720px',
      lg: '960px',
      xl: '1140px',
    },
    colors: {
      'primary': '#ff55a5',
      'text': '#ffffffb3',
      'bgd': '#2b2b31',
    },
    fontFamily: {
      'openSans': ['"Open Sans"'],
    }
  },
  plugins: [],
}