import { Box, Text, VStack } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/react"
import { createTransition } from "@utils"
import NextImage from "next/image"
import NextLink from "next/link"

type WorkPostPreviewProps = {
	title: string
	description: string
	slug: string
	thumbnailUrl: string
	thumbnailBlur: string
}

const WorkPostPreview: React.FC<WorkPostPreviewProps> = ({
	title,
	description,
	slug,
	thumbnailBlur,
	thumbnailUrl,
}) => {
	return (
		<Box
			className="work-post-preview"
			p={4}
			border="1px"
			borderColor="transparent"
			transition={createTransition("border-color")}
			_hover={{ borderColor: "gray.300" }}
		>
			<Box w="full" h="30vh" position="relative" overflow="hidden">
				<NextImage
					src={thumbnailUrl}
					alt={title}
					layout="fill"
					objectFit="cover"
					objectPosition="center center"
					placeholder="blur"
					blurDataURL={thumbnailBlur}
				/>
			</Box>
			<VStack pt={6} spacing={5} justify="flex-start" align="flex-start">
				<Text as="h3" fontWeight="medium" fontSize="2xl" lineHeight={1}>
					{title}.
				</Text>
				<Text textStyle="paragraph" fontSize="sm">
					{description}
				</Text>
				<NextLink href={`/work/${slug}`} passHref>
					<Button as="a" variant="filled" size="sm" title={`${title}.`}>
						Learn more.
					</Button>
				</NextLink>
			</VStack>
		</Box>
	)
}

export default WorkPostPreview
