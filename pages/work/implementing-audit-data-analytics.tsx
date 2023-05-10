import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { PageLayout } from "@components/PageLayout";
import Step1Image from "@images/work/implementing-audit-data-analytics/step1.jpeg";
import Step2Image from "@images/work/implementing-audit-data-analytics/step2.jpeg";
import Step3Image from "@images/work/implementing-audit-data-analytics/step3.jpeg";
import Step4Image from "@images/work/implementing-audit-data-analytics/step4.jpeg";
import { createTransition } from "@utils";
import { NextPage } from "next";
import NextImage, { StaticImageData } from "next/image";
import Masonry from "react-masonry-css";

type Content = {
	title: string;
	image: StaticImageData;
	content: string;
};

const CONTENT: Content[] = [
	{
		title: "Setting Goals & Mission Statement",
		image: Step1Image,
		content:
			'Data analytics can come in many different forms and saying "we should use data analytics" is very vague. To make it a standard part of every audit, it was crucial to identify the "why" and the "how". After talking to various members in Audit, I identified 3 main benefits: better data accessibility, faster data analytics tool development, and more automated control testing. The "how" outlined detailed and trackable goals that will monitor our progress against the overall mission.',
	},
	{
		title: "Initiating a Standard D&A Questionnaire",
		image: Step2Image,
		content:
			"At any given time, there are at least 4 audits being performed simultaneously. With limited data specialists, not all these audits can have low level data analytics consultations. To facilitate this process, I developed a questionnaire asking key questions to audit managers about their data requests and audits. This questionnaire is to be answered the previous quarter during pre-planning and is purposed to provide data specialists with context so they can determine feasibility and needed resources.",
	},
	{
		title: "Creating an Audit Prioritization Framework",
		image: Step3Image,
		content:
			"The questionnaire also gives the data strategy team the ability to rank audits in terms of priority. The questionnaire has a mix of multiple choice and open-ended questions. The MC asks about risk level, benefit (5-1), effort (1-5), data accessibility, request type and future reusability, while the OE offers context for the data specialist’s review. By tying each multiple choice answer to a numerical value and totaling the values, each audit was given a “score”. Sorting these scores from least to greatest gives the DA team its audit request priority ranking.",
	},
	{
		title: "In Progress",
		image: Step4Image,
		content:
			"We are still working on launching this initiative and are excited for the results!",
	},
];

const ImplementingAuditDataAnalyticsPost: NextPage = () => {
	return (
		<PageLayout title="Implementing Audit Data Analytics">
			<VStack spacing={6}>
				<Text textStyle="paragraph">
					The purpose of this initiative is to efficiently and consistently
					support audits with data analytics. To have the most strategic
					success, as well as the most smooth and simple implementation, for our
					stakeholders, we are in the process of creating a strong foundation.
				</Text>
				<Box
					sx={{
						".steps-grid": {
							display: "flex",
							ml: -6,
							mb: -6,
							w: "auto",
						},
						".steps-grid-col": {
							pl: 6,
							bgClip: "padding-box",
							"& .step-container": {
								mb: 6,
							},
						},
					}}
				>
					<Masonry
						className="steps-grid"
						columnClassName="steps-grid-col"
						breakpointCols={{ default: 2, 640: 1 }}
					>
						{CONTENT.map(({ title, image, content }, index) => (
							<Box
								role="group"
								w="full"
								p={6}
								bg="brand.100"
								className="step-container"
								key={`${title}-step`}
							>
								<VStack spacing={3} justify="flex-start" align="flex-start">
									<Box w="full" h="30vh" position="relative">
										<NextImage
											src={image}
											layout="fill"
											objectFit="cover"
											objectPosition="center center"
											placeholder="blur"
											alt={`Implementing Audit Data Analytics: Step ${
												index + 1
											}`}
										/>
										<Flex
											userSelect="none"
											justify="center"
											align="center"
											position="absolute"
											left={0}
											top={0}
											w="full"
											h="full"
											bg="black"
											color="white"
											opacity={0.8}
											fontStyle="italic"
											fontSize="8xl"
											fontWeight="bold"
											transition={createTransition("opacity")}
											_groupHover={{
												opacity: 0,
											}}
										>
											{index + 1}
										</Flex>
									</Box>
									<Text
										as="h3"
										fontWeight="medium"
										textAlign="left"
										fontSize={{ base: "xl", sm: "2xl" }}
									>
										{title}
									</Text>
									<Text textStyle="paragraph">{content}</Text>
								</VStack>
							</Box>
						))}
					</Masonry>
				</Box>
			</VStack>
		</PageLayout>
	);
};

export default ImplementingAuditDataAnalyticsPost;
