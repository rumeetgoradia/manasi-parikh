import { createTransition } from "@utils"

export const Button = {
	variants: {
		filled: {
			bg: "black",
			color: "white",
			borderRadius: 0,
			py: 5,
			px: 6,
			lineHeight: 1,
			fontWeight: 500,
			fontSize: "16px",
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
}
