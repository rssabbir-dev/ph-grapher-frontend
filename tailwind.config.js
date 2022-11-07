/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				light: {
					...require('daisyui/src/colors/themes')[
						'[data-theme=light]'
					],
					primary: '#E11D48',
					'primary-focus': '#BE123C',
				},
			},
		],
	},
};
