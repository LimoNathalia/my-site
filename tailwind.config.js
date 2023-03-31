/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#F2AF28',
      secondary: '#79031d',
      white: '#F5F7F5',
      black: '#292830',
    },
    fontFamily: {
      poly: ['Polygraph-Bold', 'sans-serif'],
      open: ['Open Sans', 'sans-serif'],
      shadows: ['Shadows Into Light'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
};
