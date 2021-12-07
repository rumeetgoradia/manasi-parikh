import { Box, Container, Text } from "@chakra-ui/layout"
import { NextSeo } from "next-seo"

type PageLayoutProps = {
	title: string
}

const PageLayout: React.FC<PageLayoutProps> = ({ title, children }) => {
	return (
		<>
			<NextSeo title={title} />
			<Box w="full" px={8} py={12} minH="calc(100vh - 109px - 88px)">
				<Container maxW="container.lg" p={0} as="main" overflowX="hidden">
					<Text as="h1" fontSize="5xl" fontWeight="bold" mb={6}>
						{title}.
					</Text>
					{children}
				</Container>
			</Box>
		</>
	)
}

export default PageLayout
