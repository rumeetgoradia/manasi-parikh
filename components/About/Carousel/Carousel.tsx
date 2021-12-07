import { IconButton } from "@chakra-ui/button"
import { Box, Flex } from "@chakra-ui/layout"
import { createTransition } from "@utils"
import NextImage from "next/image"
import { useMemo, useState } from "react"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"

export type CarouselImage = {
	src: string
	width: number
	height: number
	blurDataUrl: string
}

type CarouselProps = {
	images: CarouselImage[]
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
	const carouselItems = useMemo(
		() =>
			images.map(({ src, width, height, blurDataUrl }) => (
				<Box
					h="300px"
					w={`${(width * 300) / height}px`}
					pointerEvents="none"
					userSelect="none"
					position="relative"
					sx={{
						"& div": {
							display: "inline-block !important",
							"& .carousel-image": {
								display: "inline-block !important",
							},
						},
					}}
					key={`${src}-carousel-image`}
				>
					<NextImage
						src={src}
						layout="fill"
						objectFit="contain"
						objectPosition="center center"
						placeholder="blur"
						blurDataURL={blurDataUrl}
						className="carousel-image"
					/>
				</Box>
			)),
		[images]
	)

	const [activeIndex, setActiveIndex] = useState<number>(0)
	const slidePrev = () => setActiveIndex(activeIndex - 1)
	const slideNext = () => setActiveIndex(activeIndex + 1)
	const syncActiveIndex = ({ item }: { item: number }) => setActiveIndex(item)

	return (
		<Flex
			w="full"
			minW={0}
			maxW="min(calc(100vw - 32px - 32px - 15px), var(--chakra-sizes-container-lg))"
			overflowX="hidden"
			sx={{
				"& .alice-carousel__wrapper": {
					h: "300px",
					cursor: "grab",
					overflow: "hidden",
					position: "relative",
					w: "full",
					paddingLeft: "33% !important",
					paddingRight: "33% !important",
					_active: { cursor: "grabbing" },
				},
			}}
		>
			<IconButton
				onClick={slidePrev}
				icon={<BsArrowLeft />}
				aria-label="Previous image"
				display="flex"
				justifyContent="flex-start"
				alignItems="center"
				flex="0 0 40px"
				color="black"
				variant="unstyled"
				h="300px"
				borderRadius={0}
				opacity={0.8}
				textAlign="center"
				transition={createTransition(["opacity", "font-size"])}
				_hover={{
					opacity: 1,
					fontSize: "lg",
				}}
				_focus={{
					boxShadow: "none",
					outline: "none",
					opacity: 1,
				}}
			/>
			<Box flex="1 1 auto" minW={0}>
				<AliceCarousel
					items={carouselItems}
					autoWidth
					infinite
					mouseTracking
					touchTracking
					disableDotsControls
					disableButtonsControls
					onSlideChanged={syncActiveIndex}
					activeIndex={activeIndex}
				/>
			</Box>
			<IconButton
				onClick={slideNext}
				icon={<BsArrowRight />}
				aria-label="Next image"
				display="flex"
				justifyContent="flex-end"
				alignItems="center"
				flex="0 0 40px"
				color="black"
				variant="unstyled"
				h="300px"
				borderRadius={0}
				opacity={0.8}
				transition={createTransition(["opacity", "font-size"])}
				textAlign="right"
				_hover={{
					opacity: 1,
					fontSize: "lg",
				}}
				_focus={{
					boxShadow: "none",
					outline: "none",
					opacity: 1,
				}}
			/>
		</Flex>
	)
}

export default Carousel
