import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Code,
	Flex,
	Text,
	VStack,
} from "@chakra-ui/react"
import { PageLayout } from "@components/PageLayout"
import ComicImage from "@images/work/building-datasets/comic.jpg"
import { NextPage } from "next"
import NextImage from "next/image"

type Content = {
	title: string
	content: JSX.Element
}

const CONTENT: Content[] = [
	{
		title: "Schema Validation",
		content: (
			<Text textStyle="paragraph">
				Before jumping into the loads of data, we tested the table schemas to
				answer the following questions:{" "}
				<strong>
					<em>
						Did we have every needed field? Were they labeled correctly? Did
						they have the right datatype? Were they null? Was the Primary Key
						correct?
					</em>
				</strong>{" "}
				To do this efficiently, a developer and I wrote a Python script that ran
				the query <Code>DESCRIBE table_name;</Code> in MySQL for all the tables
				and compiled the results into a text file. From there, another script
				compared the results to the source table schemas to make sure they
				matched. The automation not only reduced the risk of human error, but
				saved hours of manual work for every discrepancy found.
			</Text>
		),
	},
	{
		title: "Table Structure Validation",
		content: (
			<Text textStyle="paragraph">
				Each table had hundreds of rows of data and only from the last two
				months. In the past, the team would divide up the tables amongst
				themselves and manually extract each one to{" "}
				<strong>
					<em>check row counts, column counts, checksums, and null columns</em>
				</strong>{" "}
				against the source tables. And if there was a change (which there were
				plenty of) the team would have to go through the process again. To
				simplify the process, the developer coded 2 extraction scripts that
				automated the downloading process of the tables. Then, I wrote a
				comparison script that produced a CSV file outlining which tables had
				discrepancies and where. Now all we had to do was run these 3 scripts
				every time we needed to retest!
			</Text>
		),
	},
	{
		title: "Building Queries",
		content: (
			<Text textStyle="paragraph">
				Once we had confirmed that the staging tables matched the source tables,
				we moved on to joining the tables together in Hive and Oracle&apos;s ATP
				using SQL. Often times business partners would request more data
				elements or calculated fields that required out of the box thinking to
				implement. Each query had an average of 20 data elements from 20
				different tables.
			</Text>
		),
	},
	{
		title: "Query Reconciliation",
		content: (
			<Text textStyle="paragraph">
				Because the queries were quite complex and long, it was important to
				validate that the totals were correct. The queries were accessible in
				Tableau and so we were able drag, drop and filter significant columns to
				compare their totals to the source. For future reference, I also
				documented our reconciliation methodology in the case of inquiries,
				errors and/or audits.
			</Text>
		),
	},
	{
		title: "Building Dashboards",
		content: (
			<Text textStyle="paragraph">
				By this point, our database was accessible and accurate and it was time
				to show the business partners our product. The easiest way to do this
				was to design and present sample dashboards for them. We had already
				provided them with a data element dictionary, but having example
				dashboards can help connect the dots together and inspire new ways to
				visualize the data. This is a crucial last step because you can make all
				the data lakes you want, but if clients don&apos;t understand the
				usability and benefits, the database could potentially go unused.
			</Text>
		),
	},
]

const BuildingDatasetsPost: NextPage = () => {
	return (
		<PageLayout title="Building Datasets">
			<VStack spacing={6} justify="flex-start" align="flex-start">
				<Text textStyle="paragraph">
					A new financial data platform, Oracle, was being introduced, which
					meant 70 new tables needed to be validated. Individually, each
					table&apos;s data was relatively useless and so the tables also needed
					to be joined together to create 6 large datasets that financial
					analysts could access for daily use.
				</Text>
				<Accordion allowMultiple w="full">
					{CONTENT.map(({ title, content }, index) => (
						<AccordionItem key={`${title}-step`}>
							<AccordionButton
								py={4}
								outline="none !important"
								boxShadow="none !important"
							>
								<Flex
									textAlign="left"
									flex="1"
									fontSize={{ base: "xl", sm: "2xl" }}
								>
									<Text
										as="h3"
										flexShrink={0}
										flexGrow={0}
										flexBasis={{ base: "15px", md: "40px" }}
										color="gray.500"
										fontWeight="medium"
										textAlign="right"
									>
										{index + 1}
									</Text>
									<Text as="h3" ml={4}>
										{title}
									</Text>
								</Flex>
								<AccordionIcon />
							</AccordionButton>
							<AccordionPanel
								pb={4}
								px={{ base: "22px", sm: "47px", md: "72px" }}
							>
								{content}
							</AccordionPanel>
						</AccordionItem>
					))}
				</Accordion>
				<Flex w="full" justify="center" align="center" textAlign="center">
					<Box w="400px">
						<NextImage
							src={ComicImage}
							placeholder="blur"
							alt="Building Datasets."
						/>
					</Box>
				</Flex>
			</VStack>
		</PageLayout>
	)
}

export default BuildingDatasetsPost
