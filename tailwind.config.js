/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'header-banner': "url('/src/assets/images/person.jpg')",
				'footer-img': "url('/src/assets/images/footer.jpg')",
			},
		},
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
