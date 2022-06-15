import { Box, Flex, Text, VStack } from "@chakra-ui/react"
import { PageLayout } from "@components/PageLayout"
import Step1Image from "@images/work/headcount-allocation-modeling/step1.jpg"
import Step2Image from "@images/work/headcount-allocation-modeling/step2.png"
import Step3Image from "@images/work/headcount-allocation-modeling/step3.png"
import Step4Image from "@images/work/headcount-allocation-modeling/step4.jpeg"
import { NextPage } from "next"
import NextImage, { StaticImageData } from "next/image"

type Content = {
	title: string
	image: StaticImageData
	content: JSX.Element
}

const CONTENT: Content[] = [
	{
		title: "Obtaining the Data",
		image: Step1Image,
		content: (
			<Box>
				<Text textStyle="paragraph">
					To start calculating costs per product team, I had to first find out
					what data was available and how to access it. This was definitely a
					pain point because our HR system (Workday) did not link with our
					Financial system (Oracle). Nonetheless, this is the data we had:
				</Text>
				<Box as="ol" pl={8}>
					<li>
						<Text textStyle="paragraph" ml={4}>
							An annual headcount forecasting model that predicted the # of
							employees by job level and cost center by month. This included a
							list of positions the division planned to fill for the year.
						</Text>
					</li>
					<li>
						<Text textStyle="paragraph" ml={4}>
							A monthly actual headcount report with employee information.
						</Text>
					</li>
					<li>
						<Text textStyle="paragraph" ml={4}>
							Salaries by job level.
						</Text>
					</li>
					<li>
						<Text textStyle="paragraph" ml={4}>
							A table that mapped each employee by the appropriate product team.
							Note: employees worked on multiple product lines. (e.g. A writer
							spent 50% of their time in X and 50% in Y.)
						</Text>
					</li>
					<li>
						<Text textStyle="paragraph" ml={4}>
							Annual Quality Engagements and MQLs by product team.
						</Text>
					</li>
				</Box>
			</Box>
		),
	},
	{
		title: "Tying the Data Together",
		image: Step2Image,
		content: (
			<Text textStyle="paragraph">
				All the datasources were formatted in an Excel file or the cloud. In
				Tableau, I connected all these datasources to create one
				&quot;database.&quot;
			</Text>
		),
	},
	{
		title: "Building the Dashboards",
		image: Step3Image,
		content: (
			<Text textStyle="paragraph">
				After speaking with stakeholders on what they wanted to see, I put the
				dashboards together. I placed key data points (Total Headcount, Total
				Headcount Costs, # of Open Positions) on the top. Using a horizontal bar
				graph, I showed the Year To Date headcount costs by Product Team. With
				the Tooltip feature, I included anonymous data: job titles, employee
				grade level and the estimated percent of time this employee spent
				working on this team.
			</Text>
		),
	},
	{
		title: "Presenting the Model",
		image: Step4Image,
		content: (
			<Text textStyle="paragraph">
				After designing the dashboards, it was time to communicate my findings
				to the stakeholders. The analysis answered questions on which
				product&apos;s marketing efforts were paying off the most and which
				product teams were spending the most money. Using these takeaways, the
				stakeholders were able to reevaluate their marketing initiatives for
				product lines with low ROI and increase their QE/$ and MQL/$.
			</Text>
		),
	},
]

const HeadcountAllocationModelingPost: NextPage = () => {
	return (
		<PageLayout title="Headcount Allocation Modeling">
			<VStack spacing={6} justify="flex-start" align="flex-start">
				<Text textStyle="paragraph">
					To be able to forecast and evaluate marketing effectiveness, it is
					important to have visibility into your expenses. In this scenario,
					finance viewed headcount costs by cost centers. For example, all
					writers tied into one cost center and designers in another. The
					problem with this is writers, designers, scrum masters, etc. would
					work together in teams based on product lines and with the current
					system, marketing was unable to see the cost per product team. To
					evaluate the ROI, this was definitely a necessary input, which is why
					I created the headcount allocation model.
				</Text>
				<Box>
					{CONTENT.map(({ title, image, content }, index) => (
						<Flex
							flexDirection={{ base: "column", md: "row" }}
							px={4}
							py={8}
							borderTop="1px"
							borderBottom={index === CONTENT.length - 1 ? "1px" : "none"}
							borderColor="gray.300"
							key={`${title}-step`}
						>
							<Flex
								fontSize={{ base: "xl", sm: "2xl" }}
								display={{ base: "flex", md: "none" }}
							>
								<Text
									as="h3"
									flexShrink={0}
									flexGrow={0}
									flexBasis={{ base: "15px", md: "40px" }}
									color="gray.500"
									fontWeight="medium"
									textAlign="left"
								>
									{index + 1}
								</Text>
								<Text as="h3" ml={4}>
									{title}
								</Text>
							</Flex>
							<Box flex="1 1 100%" display={{ base: "none", md: "block" }}>
								<Box
									ml={index % 2 === 0 ? 8 : 0}
									mr={index % 2 === 0 ? 0 : 8}
									w="50%"
									float={index % 2 === 0 ? "right" : "left"}
								>
									<NextImage
										src={image}
										placeholder="blur"
										alt={`Headcount Allocation Modeling: Step ${index + 1}`}
									/>
								</Box>
								<Flex
									textAlign="left"
									flex="1"
									fontSize={{ base: "xl", sm: "2xl" }}
									mb={4}
								>
									<Text
										as="h3"
										flexShrink={0}
										flexGrow={0}
										flexBasis={{ base: "15px", md: "40px" }}
										color="gray.500"
										fontWeight="medium"
									>
										{index + 1}
									</Text>
									<Text as="h3">{title}</Text>
								</Flex>

								<Box>{content}</Box>
							</Box>
							<Box flex="1 1 100%" display={{ md: "none" }}>
								<NextImage
									src={image}
									placeholder="blur"
									alt={`Headcount Allocation Modeling: Step ${index + 1}`}
								/>
							</Box>
							<Box mt={3} display={{ md: "none" }}>
								{content}
							</Box>
						</Flex>
					))}
				</Box>
			</VStack>
		</PageLayout>
	)
}

export default HeadcountAllocationModelingPost
