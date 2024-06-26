module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1025px',
			xl: '1280px',
			'2xl': '1536px',
		},
		colors: {
			"theme-gray": "#282828",
			"danger": "#FF4E4E",
			"gray-level-1": "#B1B7D6"
		},
		extend: {
			fontFamily: {
				sans: ['DM Sans', 'sans-serif'],
			},
			fontSize: {
				'40px': '40px',
				"22px": "22px"
			},
			maxWidth: {
				'1300': '1300px',
			},
			width: {
				'65': '65%',
				'9/10': '90%',
				'95': '95%',
				'46': '46%',
			},
			lineHeight: {
				'52.08px': '52.08px',
				"28.64px": "28.64px",
				"18.23px": "18.23px",
				"23.44px": "23.44px",
				"20.83px": "20.83px",
				"20.83px": "20.83px"
			},
		},
	},
	plugins: [],
};
