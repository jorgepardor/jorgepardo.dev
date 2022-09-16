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
      "TW-bg-dark": "#191712",
      "TW-tx-enable": "#CFC7A0",
      "TW-tx-disable": "#575757",
      "TW-el-active": "#EDAD49"



		},
    extend: {
      fontFamily: {
        Sta: ['Staatliches'],
        Ral: ['Raleway'],
        Cin: ['Cinzel'],
        Fir: ['Fira Sans']
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}