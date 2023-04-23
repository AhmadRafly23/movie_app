/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#595cff',
        secondary: '#7671f0',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
