/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			padding: {
				30: "120px",
			},
			borderColor: {
				secondary: "rgba(1, 71, 255, 1)",
				white: "rgba(255, 255, 255, 1)",
			},
			colors: {
				background: {
					primary: "rgba(247, 247, 247, 1)",
					secondary: "rgba(1, 71, 255, 1)",
					dark: "rgba(40, 40, 40, 1)",
				},
				fontColor: {
					primary: "rgba(40, 40, 40, 1)",
					secondary: "rgba(1, 71, 255, 1)",
					white: "rgba(255, 255, 255, 1)",
				},
			},
			borderWidth: {
				1: "1px",
			},
		},
		fontFamily: {
			heading: ['"Bebas Neue"', "sans-serif"],
			body: ['"Roboto Condensed"', "sans-serif"],
			support: ['"Roboto Flex"', "sans-serif"],
		},
	},
	plugins: [],
};
