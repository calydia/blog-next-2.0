module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js, ts, jsx, tsx}',
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lt-gray': '#333333',
        'lt-blue-light': '#bbc9f7',
        'lt-blue-middle': '#dfe7fc',
        'lt-blue-dark': '#54007b',
        'lt-perfume': '#e6cafc',
        'dk-blue-light': '#ade5f8',
        'dk-blue-darkest': '#010017',
        'dk-purple-header': '#35035e',
        'dk-blue-header': '#18399A',
        'dk-blue-royal': '#4169e1',
        'dk-purple': '#18032b'
      },
      fontFamily: {
        'title': 'Rock Salt, cursive',
        'sans': 'Average Sans, Arial, sans-serif',
      }
    },
  },
  plugins: [],
}
