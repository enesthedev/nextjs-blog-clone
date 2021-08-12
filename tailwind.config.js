module.exports = {
  purge: [
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}'
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
