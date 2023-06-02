import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { Carousel, CarouselImage } from "@components/About";
import { PageLayout } from "@components/PageLayout";
import CareerImage from "@images/about/career.jpeg";
import PersonalImage from "@images/about/personal.jpeg";
import { promises as fs } from "fs";
import sizeof from "image-size";
import type { GetStaticProps, NextPage } from "next";
import NextImage, { StaticImageData } from "next/image";
import path from "path";
import { getPlaiceholder } from "plaiceholder";

type Content = {
	title: string;
	image: StaticImageData;
	content: JSX.Element;
};

const CONTENT: Content[] = [
	{
		title: "Career",
		image: CareerImage,
		content: (
			<Text textStyle="paragraph">
				Currently, I work at Initiative, a marketing agency that falls under a
				larger company named Interpublic Group Mediabrands, as a Business
				Intelligence and Accountability Analyst. Through this position, I have
				utilized my Tableau and data storytelling assets to create quarterly
				campaign reports for our clients. The insights and visuals I create help
				inform our internal stakeholders on what optimizations or decisions need
				to be taken. I have been able to automate and redesign most of our
				quarterly reports for both efficiency and visual appeal. Before moving
				to the marketing industry, I was part of a finance rotational program at
				Vanguard meant to expedite Finance acumen and experience. I rotated
				through Finance Technology, Financial Planning & Analysis (FP&A) for our
				Marketing divisions. Each experience was very unique and taught me to be
				adaptable and get up to speed quickly. Here are some of my highlights:{" "}
				<strong>
					The common themes between all these projects is 1&#41; Data and 2&#41;
					Creating a value-add end product and that&apos;s what I enjoy.
				</strong>
			</Text>
		),
	},
	{
		title: "Personal",
		image: PersonalImage,
		content: (
			<Text textStyle="paragraph">
				I have always had a passion for creativity and using it as an outlet to
				voice my thoughts and feelings and also for fun! From writing to video
				editing, having an end product in mind and letting my creative side do
				the rest is a rush that can have me sitting at my computer for hours. To
				me writing lets me be candid and articulate the jumbled emotions that
				are bouncing around in my head. Video editing fulfills a similar
				concept, but visually. Crafting together a video that summarizes a trip
				or to convey a message has the ultimate satisfaction. In college, I
				coordinated 20 senior graduation videos for my fraternity &ndash; Alpha
				Kappa Psi &ndash; and the emotions and reactions that they delivered is
				what videos are all about. A few other activities I enjoy doing in my
				free time are: driving aimlessly, painting with my dad, and singing.
				Everything I listed here is a way for me to create and act without
				boundaries and that&apos;s the best part!
			</Text>
		),
	},
];

export const getStaticProps: GetStaticProps = async () => {
	const carouselImagesDirectory = path.resolve(
		process.cwd(),
		"public",
		"images",
		"about",
		"carousel"
	);
	const filenames = await fs.readdir(carouselImagesDirectory);
	const carouselImages = filenames.map(async (filename) => {
		const fileSrc = path.join(carouselImagesDirectory, filename);
		const buffer = await fs.readFile(fileSrc);

		const { width, height } = sizeof(buffer);
		const { base64 } = await getPlaiceholder(buffer);

		const src = `/images/about/carousel/${filename}`;

		return {
			src,
			width,
			height,
			blurDataUrl: base64,
		};
	});

	return {
		props: {
			carouselImages: await Promise.all(carouselImages),
		},
	};
};

type AboutPageProps = {
	carouselImages: CarouselImage[];
};

const AboutPage: NextPage<AboutPageProps> = ({ carouselImages }) => {
	return (
		<PageLayout title="About Me">
			<Text textStyle="paragraph">
				My name is Manasi Parikh and I work in Marketing Analytics. The reasons
				for this are simple: I enjoy putting puzzle pieces together to see the
				bigger picture as well as decoding a problem to pinpoint where the pain
				point is. Do both of these activities involve aching bent over necks and
				tired eyes? Yes. But when I know the satisfaction that lies at the end
				of the road, I am motivated to reach it. Through a professional lens, my
				satisfaction often comes in the form of uncovering key insights using
				data analytics, writing and running a code without errors, or finishing
				a project that allows for optimization and efficiency. Through a
				recreational lens, it means finishing a painting, completing a video
				edit, or hearing myself sing on pitch. Overall, I believe every
				experience should offer either a new skillset that prepares you for the
				next step, a step I am ready to take!
			</Text>
			<Box mt={8}>
				<Carousel images={carouselImages} />
			</Box>
			<VStack spacing={{ base: 8, md: 12 }} mt={{ base: 8, md: 12 }}>
				{CONTENT.map(({ title, image, content }, index) => (
					<Flex
						flexDirection={{ base: "column", md: "row" }}
						key={`${title}-blurb`}
					>
						{index % 2 === 1 && (
							<Box
								flex="1 1 50%"
								mr={12}
								display={{ base: "none", md: "block" }}
							>
								<Text textStyle="h2" as="h2">
									{title}
								</Text>
								{content}
							</Box>
						)}
						<Text textStyle="h2" as="h2" display={{ md: "none" }}>
							{title}
						</Text>
						<Box
							flex={{ base: "1 1 auto", md: "1 1 50%" }}
							h={{ base: "30vh", md: "auto" }}
							position="relative"
						>
							<NextImage
								src={image}
								layout="fill"
								objectFit="cover"
								objectPosition="center center"
								placeholder="blur"
								alt={title}
							/>
						</Box>
						<Box mt={3} display={{ md: "none" }}>
							{content}
						</Box>
						{index % 2 === 0 && (
							<Box
								flex="1 1 50%"
								ml={12}
								display={{ base: "none", md: "block" }}
							>
								<Text textStyle="h2" as="h2">
									{title}
								</Text>
								{content}
							</Box>
						)}
					</Flex>
				))}
			</VStack>
		</PageLayout>
	);
};

export default AboutPage;
