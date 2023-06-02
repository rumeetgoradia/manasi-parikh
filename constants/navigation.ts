type NavItem = {
	title: string;
	path: string;
	isExternal?: boolean;
};

export const NAV_ITEMS: NavItem[] = [
	{
		title: "About Me",
		path: "/about",
	},
	{
		title: "Work",
		path: "/work",
	},
	{
		title: "Contact",
		path: "/contact",
	},
	{
		title: "Resume",
		path: "/resume",
		isExternal: true,
	},
];

export const LINKEDIN_LINK =
	"https://www.linkedin.com/in/manasi-parikh-37b621133/";
