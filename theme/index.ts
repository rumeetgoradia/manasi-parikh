import { extendTheme } from "@chakra-ui/react"
import { components } from "./components"

const theme = extendTheme({
	colors: {
		brand: {
			"50": "#edddc8",
			"100": "#e7d1b5",
			"200": "#a8752d",
			"300": "#834300",
			"400": "#6f2300",
			"500": "#5c0000",
			"600": "#5c0000",
			"700": "#5a0000",
			"800": "#540000",
			"900": "#4e0000",
		},
	},
	components,
	textStyles: {
		paragraph: {
			lineHeight: 1.8,
		},
		h2: {
			fontWeight: "700",
			fontSize: "2xl",
			mb: 3,
		},
	},
	fonts: {
		heading:
			"Aktiv Grotesk Corp,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
		body: "Aktiv Grotesk Corp,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
	},
})

export default theme

export { default as Fonts } from "./fonts"
