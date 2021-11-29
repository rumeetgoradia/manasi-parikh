import { Box, Heading } from "@chakra-ui/layout"
import type { NextPage } from "next"
import { NextSeo } from "next-seo"

const HomePage: NextPage = () => {
	return (
		<>
			<NextSeo titleTemplate="%s" />
			<Box>
				<Heading>Hi! I'm Manasi.</Heading>
			</Box>
		</>
	)
}

export default HomePage
