module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'media',
  theme: {
    colors: {
			// Brand color palette
      
			"DarkBG": "#011F26",
			"DarkGR": "#025E73",
			"DarkPk": "#F2668B",
		},
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