module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        Sta: ['Staatliches'],
        Ral: ['Raleway']
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}