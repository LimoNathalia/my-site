/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#a179af',
      secondary: '',
      white: '#EDEAEA',
      black: '#3D3547',
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
