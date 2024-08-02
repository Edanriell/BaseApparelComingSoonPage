import type { Config } from "tailwindcss";

export default {
	content: [
		"./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./shared/**/*.{js,ts,jsx,tsx}",
		"./widgets/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		screens: {
			tablet: "768px",
			laptop: "1024px",
			desktop: "1440px",
			desktopXl: "2160px"
		},
		fontWeight: {
			thin: "100",
			extralight: "200",
			light: "300",
			normal: "400",
			medium: "500",
			semibold: "600",
			bold: "700",
			extrabold: "800",
			black: "900"
		},
		fontFamily: {
			josefinSans: ["Josefin Sans"]
		},
		extend: {
			colors: {
				"oriental-pink": {
					"50": "#faf6f6",
					"100": "#f5ebeb",
					"200": "#eedada",
					"300": "#e2bfbf",
					"400": "#ce9898",
					"400-05": "rgba(206, 152, 152, 0.5)",
					"500": "#bb7878",
					"600": "#a55d5d",
					"700": "#894c4c",
					"800": "#734141",
					"900": "#613b3b",
					"950": "#331c1c"
				},
				masala: {
					"50": "#f4f3f2",
					"100": "#e3e1de",
					"200": "#c9c3bf",
					"300": "#aaa09a",
					"400": "#92847d",
					"500": "#83756f",
					"600": "#70615e",
					"700": "#5b4e4d",
					"800": "#4f4544",
					"900": "#423a3a",
					"950": "#272121"
				},
				alabaster: {
					"50": "#fafafa",
					"100": "#efefef",
					"200": "#dcdcdc",
					"300": "#bdbdbd",
					"400": "#989898",
					"500": "#7c7c7c",
					"600": "#656565",
					"700": "#525252",
					"800": "#464646",
					"900": "#3d3d3d",
					"950": "#292929"
				}
			},
			boxShadow: {
				buttonShadow: "0 1.5rem 2rem 0 rgba(198, 110, 110, 0.25)"
			},
			backgroundImage: {
				buttonGradient: "linear-gradient(135deg, #f8bfbf 0%, #ee8b8b 100%)"
			},
			gridTemplateColumns: {
				customTwoCols: "1fr 42.36vw"
			}
		}
	},
	plugins: []
} satisfies Config;
