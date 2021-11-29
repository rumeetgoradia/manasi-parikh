import { Button } from "@chakra-ui/button"
import { Box, Container, Flex, Text } from "@chakra-ui/layout"
import { SITE_NAME } from "@constants"
import LandingImage from "@images/home/landing.jpg"
import type { NextPage } from "next"
import { NextSeo } from "next-seo"
import NextImage from "next/image"
import NextLink from "next/link"

const HomePage: NextPage = () => {
	return (
		<>
			<NextSeo titleTemplate="%s" />
			<Flex justify="center" align="center" w="full" px={8} py={8}>
				<Container maxW="container.lg" p={0}>
					<Flex
						w="full"
						pb={8}
						align="center"
						flexDirection={{ base: "column", md: "row" }}
					>
						<Flex
							w="full"
							justify="center"
							position="relative"
							zIndex={99}
							mr={{ md: 16 }}
							mb={{ base: 4, md: 0 }}
						>
							<NextImage
								src={LandingImage}
								width={2051}
								height={1832}
								placeholder="blur"
								alt={SITE_NAME}
							/>
							<Box
								position="absolute"
								w="full"
								h="full"
								bg="black"
								opacity={0.2}
								zIndex={100}
							/>
						</Flex>
						<Box as="main" w="full">
							<Text
								as="h1"
								fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
								fontWeight={700}
							>
								Hi!
							</Text>
							<Text mb={6} textStyle="paragraph">
								My name is Manasi (<em>Maan&sdot;See</em>) Parikh. Welcome to my
								site! To learn more about me click the button below or feel free
								to explore at your own pace.
							</Text>
							<NextLink href="/about" passHref>
								<Button variant="filled">About Me.</Button>
							</NextLink>
						</Box>
					</Flex>
				</Container>
			</Flex>
		</>
	)
}

export default HomePage
