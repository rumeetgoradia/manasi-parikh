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
};

export default withPlaiceholder(config);
