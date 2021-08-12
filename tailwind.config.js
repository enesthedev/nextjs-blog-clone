module.exports = {
  purge: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          1000: '#18181b'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
