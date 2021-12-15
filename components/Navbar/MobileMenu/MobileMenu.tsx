import {
	Box,
	Button,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerOverlay,
	Flex,
	Link,
	VStack,
} from "@chakra-ui/react"
import { LINKEDIN_LINK, NAV_ITEMS } from "@constants"
import { createTransition } from "@utils"
import NextLink from "next/link"
import React, { useRef } from "react"
import { FaLinkedinIn } from "react-icons/fa"

type MobileMenuProps = {
	activePath: string
	disclosure: {
		isOpen: boolean
		onClose: () => void
		onToggle: () => void
	}
}

const MobileMenu: React.FC<MobileMenuProps> = ({
	activePath,
	disclosure: { onToggle, isOpen, onClose },
}) => {
	const btnRef = useRef<HTMLButtonElement>(null)

	return (
		<>
			<Button
				onClick={() => {
					window.scrollTo(0, 0)
					onToggle()
				}}
				aria-label={`${isOpen ? "Close" : "Open"} menu`}
				variant="unstyled"
				w="35px"
				h="35px"
				zIndex={99999}
				position="relative"
				display={{ sm: "none" }}
				_focus={{
					outline: "none",
				}}
			>
				{[1, -1].map((v) => (
					<Box
						as="span"
						h="1px"
						w="full"
						bg="black"
						position="absolute"
						left="50%"
						borderRadius={1}
						transition={createTransition("transform")}
						transform={
							isOpen
								? `translate(-50%, 0) rotate(${v * 45}deg)`
								: `translate(-50%, ${-v * -5.5}px)`
						}
						key={`hamburger-span-${v}`}
					/>
				))}
			</Button>

			<Drawer
				isOpen={isOpen}
				onClose={onClose}
				initialFocusRef={btnRef}
				placement="bottom"
				size="full"
			>
				<DrawerOverlay display={{ sm: "none" }} bg="white" />
				<DrawerContent display={{ sm: "none" }} bg="white">
					<DrawerBody
						pt="109px"
						h="full"
						display="flex"
						flexDirection="column"
						justify="center"
						align="center"
					>
						<Flex
							// h="full"
							flexGrow={1}
							justify="center"
							align="center"
							flexDirection="column"
						>
							<Button
								w={0}
								h={0}
								p={0}
								pointerEvents="none"
								variant="unstyled"
								_focus={{
									outline: "none",
									boxShadow: "none",
								}}
								ref={btnRef}
							/>
							<VStack w="full" spacing={4}>
								{NAV_ITEMS.map((navItem) => (
									<NextLink
										href={navItem.path}
										passHref
										key={`${navItem.title}-nav-item`}
									>
										<Link
											onClick={onClose}
											title={navItem.title}
											isExternal={navItem.isExternal}
											fontSize="4xl"
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
												bottom: 0,
												left: "50%",
												height: "1px",
												width: activePath.includes(navItem.path)
													? "110% !important"
													: 0,
												transform: "translateX(-50%)",
												bg: "black",
												transition: createTransition("width"),
											}}
										>
											{navItem.title}
										</Link>
									</NextLink>
								))}
							</VStack>
						</Flex>
						<Flex flexShrink={1} mb={16} justify="center">
							<NextLink href={LINKEDIN_LINK} passHref>
								<Link
									onClick={onClose}
									title="LinkedIn"
									isExternal
									transition={createTransition("transform")}
									_hover={{ transform: "scale(1.1)" }}
									_focus={{ transform: "scale(1.1)", outline: "none" }}
									_active={{ transform: "scale(0.9)" }}
								>
									<FaLinkedinIn fontSize="1.75rem" />
								</Link>
							</NextLink>
						</Flex>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	)
}

export default MobileMenu
