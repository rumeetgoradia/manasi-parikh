import { HStack, Link } from "@chakra-ui/react";
import { LINKEDIN_LINK, NAV_ITEMS } from "@constants";
import { createTransition } from "@utils";
import { default as NextLink } from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
type DesktopMenuProps = {
	activePath: string;
};

const DesktopMenu: React.FC<DesktopMenuProps> = ({ activePath }) => {
	return (
		<HStack spacing={4} as="nav" display={{ base: "none", sm: "flex" }}>
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
							width: activePath.includes(navItem.path) ? "110% !important" : 0,
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
	);
};

export default DesktopMenu;
