/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sono', 'sans-serif'],
      },
      maxWidth: {
        '1/4': '25%',
        '1/3': '33%',
        '1/2': '50%',
        '4/6': '66%',
        '3/4': '75%',
      },
      height: {
        81: '20.5rem',
      },
      borderWidth: {
        10: '10px',
      },
      padding: {
        header: '60px',
      },
      fontSize: {
        0: '0px',
      },
      colors: {
        ghostWhite: '#f8f8ff',
      },
      keyframes: {
        expand: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        expand: 'expand 2s forwards',
      },
    },
  },
  plugins: [],
};
