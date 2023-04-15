/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#FBFBFB',
        gray20: '#AEAEAE',
        greenLight: 'rgba(142, 255, 139, 0.5);',
        green: ' #8EFF8B'

      }
    },
  },
  plugins: [],
}

