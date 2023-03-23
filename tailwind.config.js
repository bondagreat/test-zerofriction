/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'my-green': '#D9EF0C',
        'my-light-green': '#DEE34B',
        'my-dark-green': '#87A30D',
      },
      fontFamily: {
        kanit: ['Kanit'],
        base: ['Montserrat'],
      },
    },
  },
  plugins: [require('daisyui')],
};
