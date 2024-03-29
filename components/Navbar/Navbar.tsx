import { Container, Flex, useDisclosure } from "@chakra-ui/react";
import { Logo } from "@components/Logo";
import { createTransition } from "@utils";
import { default as NextLink } from "next/link";
import { useRouter } from "next/router";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";

const Navbar: React.FC = () => {
	const router = useRouter();
	const disclosure = useDisclosure();

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
			<Container maxW="container.xl" p={0}>
				<Flex justify="space-between" align="center">
					<NextLink href="/" passHref>
						<Logo
							onClick={disclosure.onClose}
							h="45px"
							w="auto"
							cursor="pointer"
							position="relative"
							zIndex={99999}
							transition={createTransition("transform")}
							_hover={{ transform: "scale(1.05)" }}
							_focus={{ transform: "scale(1.05)", outline: "none" }}
							_active={{ transform: "scale(0.95)" }}
						/>
					</NextLink>
					<DesktopMenu activePath={router.pathname} />
					<MobileMenu activePath={router.pathname} disclosure={disclosure} />
				</Flex>
			</Container>
		</Flex>
	);
};

export default Navbar;
