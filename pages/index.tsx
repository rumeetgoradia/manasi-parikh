import { Box } from "@chakra-ui/layout"
import type { NextPage } from "next"
import { NextSeo } from "next-seo"

const HomePage: NextPage = () => {
	return (
		<>
			<NextSeo titleTemplate="%s" />
			<Box>hello</Box>
		</>
	)
}

export default HomePage
