import { Container, Flex, HStack, Link } from "@chakra-ui/layout"
import { Logo } from "@components/Logo"
import { LINKEDIN_LINK, NAV_ITEMS } from "@constants"
import { createTransition } from "@utils"
import { useRouter } from "next/dist/client/router"
import NextLink from "next/link"
import { FaLinkedinIn } from "react-icons/fa"

const Navbar: React.FC = () => {
	const router = useRouter()

	return (
		<Flex
			as="header"
			justify="center"
			align="center"
			w="full"
			px={8}
			py={8}
			bg="brand.50"
		>
			<Container maxW="container.lg">
				<Flex justify="space-between" align="center">
					<NextLink href="/" passHref>
						<Logo
							h="45px"
							w="auto"
							cursor="pointer"
							transition={createTransition("transform")}
							_hover={{ transform: "scale(1.05)" }}
							_focus={{ transform: "scale(1.05)", outline: "none" }}
							_active={{ transform: "scale(0.95)" }}
						/>
					</NextLink>
					<HStack spacing={4} as="nav">
						{NAV_ITEMS.map((navItem) => (
							<NextLink
								href={navItem.path}
								passHref
								key={`${navItem.title}-nav-item`}
							>
								<Link
									title={navItem.title}
									isExternal={navItem.isExternal}
									textDecoration="none !important"
									position="relative"
									_hover={{
										_after: {
											width: "50%",
										},
									}}
									_focus={{
										outline: "none",
										_after: {
											width: "50%",
										},
									}}
									_active={{ transform: "scale(0.975)" }}
									_after={{
										content: '""',
										position: "absolute",
										bottom: "-4px",
										left: "50%",
										height: "1px",
										width:
											router.pathname === navItem.path ? "110% !important" : 0,
										transform: "translateX(-50%)",
										bg: "black",
										transition: createTransition("width"),
									}}
								>
									{navItem.title}
								</Link>
							</NextLink>
						))}
						<NextLink href={LINKEDIN_LINK} passHref>
							<Link
								title="LinkedIn"
								isExternal
								transition={createTransition("transform")}
								_hover={{ transform: "scale(1.05)" }}
								_focus={{ transform: "scale(1.05)", outline: "none" }}
								_active={{ transform: "scale(0.95)" }}
							>
								<FaLinkedinIn fontSize="1.25rem" />
							</Link>
						</NextLink>
					</HStack>
				</Flex>
			</Container>
		</Flex>
	)
}

export default Navbar
