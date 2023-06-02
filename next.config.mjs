// @ts-check
import withPlaiceholder from "@plaiceholder/next";

/**
 * @type {import('next').NextConfig}
 */
const config = {
	transpilePackages: ["@plaiceholder/ui"],
	images: {
		domains: [],
	},
	async redirects() {
		return [
			{
				source: "/resume",
				destination: "/Manasi_Parikh_Resume.pdf",
				permanent: true,
			},
		];
	},
};

export default withPlaiceholder(config);
