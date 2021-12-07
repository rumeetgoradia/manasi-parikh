import { Button } from "@chakra-ui/button"
import { Box, Container, Flex, Text } from "@chakra-ui/layout"
import { SITE_NAME } from "@constants"
import ArticleImage from "@images/home/article.jpg"
import LandingImage from "@images/home/landing.jpg"
import { fade } from "@utils"
import type { NextPage } from "next"
import { NextSeo } from "next-seo"
import NextImage from "next/image"
import NextLink from "next/link"

const HomePage: NextPage = () => {
	return (
		<>
			<NextSeo titleTemplate="%s" />
			<Box w="full" px={8} py={12}>
				<Container maxW="container.lg" p={0}>
					<Flex
						w="full"
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
			</Box>
			<Box
				minH={{ base: "200px", md: "250px" }}
				w="full"
				position="relative"
				overflow="hidden"
			>
				<Box
					as="video"
					autoPlay
					loop
					muted
					controls={false}
					pointerEvents="none"
					userSelect="none"
					w="full"
					position="absolute"
					zIndex={100}
					left={0}
					top="72.5%"
					transform="translateY(-72.5%)"
				>
					<source src="/images/home/quote-background.mp4" type="video/mp4" />
				</Box>
				<Flex
					justify="center"
					align="center"
					flexDirection="column"
					textAlign="center"
					px={8}
					w="full"
					h="full"
					position="absolute"
					bg={fade("#fff", 0.4)}
					zIndex={101}
				>
					<Text
						as="h3"
						fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
						lineHeight={1.2}
						fontWeight="bold"
						mb={4}
					>
						&ldquo;Change is the only constant.&ldquo;
					</Text>
					<Text fontSize="xl" fontStyle="italic">
						&mdash; Heraclitus
					</Text>
				</Flex>
			</Box>
			<Box w="full" px={8} py={12}>
				<Container
					maxW="container.lg"
					position="relative"
					zIndex={199}
					p={0}
					pb={{ base: 24, sm: 12, md: 0 }}
				>
					<Box w={{ base: "90%", lg: "70%" }}>
						<Flex w="full" justify="center" position="relative" zIndex={99}>
							<NextImage
								src={ArticleImage}
								width={1600}
								height={757}
								placeholder="blur"
								alt={SITE_NAME}
							/>
						</Flex>
					</Box>
					<Box
						w={{ base: "90%", md: "45%" }}
						bg="brand.100"
						position="absolute"
						zIndex={200}
						right={0}
						bottom={{ base: 0, md: "inherit" }}
						top={{ md: "50%" }}
						transform={{ md: "translateY(-50%)" }}
						p={{ base: 4, sm: 6, lg: 8 }}
					>
						<Text
							as="h4"
							fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
							fontWeight="bold"
							lineHeight={1.2}
							mb={6}
						>
							Growing Up South Asian American
						</Text>
						<NextLink
							href="https://www.southasianproductions.com/blog/if-im-proud-of-who-i-am-then-others-will-be-too"
							passHref
						>
							<Button
								as="a"
								title="Growing Up South Asian American"
								textDecoration="none !important"
								variant="filled"
							>
								Read My Blog Post.
							</Button>
						</NextLink>
					</Box>
				</Container>
			</Box>
		</>
	)
}

export default HomePage
