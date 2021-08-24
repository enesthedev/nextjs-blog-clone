module.exports = {
  jit: true,
  purge: {
    enabled: true,
    content: [
      "./src/**/*.{js,ts,jsx,tsx}"
    ]
  },
  darkMode: 'media',
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
  plugins: [
    require('@tailwindcss/forms')
  ],
}
