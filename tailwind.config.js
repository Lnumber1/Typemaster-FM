/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        orange: '#F16718',
        orangeCream: '#FF9B62',
        navy: '#162542',
        grayishBlue: '#7B8BAD',
        lightGray: '#E8EFF2'
      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif']
      },
    },
  },
  plugins: [],
}

