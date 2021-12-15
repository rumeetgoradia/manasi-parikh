import { createTransition } from "@utils"

export const Button = {
	baseStyle: {
		borderRadius: 0,
		fontWeight: 500,
		lineHeight: 1,
	},
	variants: {
		filled: {
			bg: "black",
			color: "white",
			transition: createTransition("opacity"),
			_hover: {
				opacity: 0.8,
			},
			_focus: {
				outline: "none",
				boxShadow: "none",
				opacity: 0.8,
			},
		},
	},
	sizes: {
		sm: {
			py: 3,
			px: 4,
			fontSize: "13px",
		},
		md: {
			py: 5,
			px: 6,
			fontSize: "16px",
		},
	},
}
