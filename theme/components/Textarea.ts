export const Textarea = {
	variants: {
		outline: {
			borderRadius: 0,
			px: 3,
			w: "full",
			_focus: {
				borderColor: "black",
				boxShadow: "0 0 0 1px black",
				outline: "none",
			},
			"&[aria-invalid=true], &[data-invalid]": {
				color: "#E53E3E",
				_focus: {
					color: "black",
				},
			},
		},
	},
}
