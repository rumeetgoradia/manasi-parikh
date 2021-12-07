import { Container, Flex, HStack, Link } from "@chakra-ui/layout"
import { Box } from "@chakra-ui/react"
import { LINKEDIN_LINK, NAV_ITEMS } from "@constants"
import { createTransition } from "@utils"
import NextLink from "next/link"
import { FaLinkedinIn } from "react-icons/fa"

const Footer: React.FC = () => {
	return (
		<Box as="footer" w="full" bg="white" px={8} pt={4} pb={12}>
			<Container maxW="container.lg" p={0}>
				<Flex
					justify={{ base: "center", sm: "space-between" }}
					align="center"
					bg="white"
				>
					<NextLink href={LINKEDIN_LINK} passHref>
						<Link
							title="LinkedIn"
							isExternal
							transition={createTransition("transform")}
							mr={{ base: 5, sm: 0 }}
							_hover={{ transform: "scale(1.1)" }}
							_focus={{ transform: "scale(1.1)", outline: "none" }}
							_active={{ transform: "scale(0.95)" }}
						>
							<FaLinkedinIn fontSize="1.25rem" />
						</Link>
					</NextLink>
					<HStack spacing={{ base: 5, sm: 8 }}>
						{NAV_ITEMS.concat({ title: "Home", path: "/" }).map(
							({ path, title, isExternal }) =>
								!isExternal ? (
									<NextLink href={path} passHref key={`${title}-footer-link`}>
										<Link
											title={title}
											fontSize={{ base: "sm", sm: "md" }}
											position="relative"
											_after={{
												content: '""',
												position: "absolute",
												left: "50%",
												bottom: "0px",
												width: "95%",
												height: "1px",
												bg: "black",
												transform: "translateX(-50%)",
												transition: createTransition("width"),
											}}
											_hover={{
												_after: {
													width: "110%",
												},
											}}
											_focus={{
												_after: {
													width: "110%",
												},
											}}
										>
											{title}
										</Link>
									</NextLink>
								) : null
						)}
					</HStack>
				</Flex>
			</Container>
		</Box>
	)
}

export default Footer
