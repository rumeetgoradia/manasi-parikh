import { Box, Container, Text } from "@chakra-ui/layout"
import { NextSeo } from "next-seo"

type PageLayoutProps =
	| {
			title: string
			pageTitle?: never
			seoTitle?: never
	  }
	| { title?: never; pageTitle: string; seoTitle: string }

const PageLayout: React.FC<PageLayoutProps> = ({
	title,
	pageTitle,
	seoTitle,
	children,
}) => {
	return (
		<>
			<NextSeo title={seoTitle || title} />
			<Box w="full" px={8} py={12} minH="calc(100vh - 109px - 88px)">
				<Container maxW="container.lg" p={0} as="main">
					<Text
						as="h1"
						fontSize="5xl"
						fontWeight="bold"
						mb={6}
						lineHeight={1.25}
					>
						{pageTitle || title}.
					</Text>
					{children}
				</Container>
			</Box>
		</>
	)
}

export default PageLayout
