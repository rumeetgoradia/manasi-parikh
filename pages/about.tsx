import { Text, VStack } from "@chakra-ui/layout"
import { Box } from "@chakra-ui/react"
import { Carousel, CarouselImage } from "@components/About"
import { PageLayout } from "@components/PageLayout"
import { promises as fs } from "fs"
import sizeof from "image-size"
import type { GetStaticProps, NextPage } from "next"
import path from "path"
import { getPlaiceholder } from "plaiceholder"

export const getStaticProps: GetStaticProps = async () => {
	const carouselImagesDirectory = path.resolve(
		process.cwd(),
		"public",
		"images",
		"about",
		"carousel"
	)
	const filenames = await fs.readdir(carouselImagesDirectory)
	const carouselImages = filenames.map(async (filename) => {
		const { width, height } = sizeof(
			path.join(carouselImagesDirectory, filename)
		)
		const src = `/images/about/carousel/${filename}`
		const { base64 } = await getPlaiceholder(src)
		return {
			src,
			width,
			height,
			blurDataUrl: base64,
		}
	})

	return {
		props: {
			carouselImages: await Promise.all(carouselImages),
		},
	}
}

type AboutPageProps = {
	carouselImages: CarouselImage[]
}

const AboutPage: NextPage<AboutPageProps> = ({ carouselImages }) => {
	return (
		<PageLayout title="About Me">
			<VStack spacing={6}>
				<Text textStyle="paragraph">
					I graduated from Rutgers Business School in 2020 with a degree in
					Business Analytics Information Technology and a minor in Psychology.
					The reasons for this are simple: I enjoy putting puzzle pieces
					together to see the bigger picture as well as decoding a problem to
					pinpoint where the pain point is. Do both of these activities involve
					aching bent over necks and tired eyes? Yes. But when I know the
					satisfaction that lies at the end of the road, I am motivated to reach
					it. Through a professional lens, my satisfaction often comes in the
					form of uncovering key insights using data analytics, writing and
					running a code without errors, or finishing a project that allows for
					optimization and efficiency. Through a recreational lens, it means
					finishing a painting, completing a video edit, or hearing myself sing
					on pitch.
				</Text>
				<Box>
					<Carousel images={carouselImages} />
				</Box>
			</VStack>
		</PageLayout>
	)
}

export default AboutPage
