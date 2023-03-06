/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'red': '#eb4034',
      'violate': 'rgb(138, 43, 226)',
      'black': '#111',
      'white':'#fff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    extend: {
      'boxShadow':'5px 5px 10px 10px rgba(1,1,1,0.4)',
    },
  },
  plugins: [
    tailwindcss ={},
    autoprefixer={},
  ],
}
