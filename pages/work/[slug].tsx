import { Box } from "@chakra-ui/layout"
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Code,
	Flex,
	Text,
	VStack,
} from "@chakra-ui/react"
import { PageLayout } from "@components/PageLayout"
import fs from "fs"
import matter from "gray-matter"
import type { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { MDXRemote } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
import NextImage from "next/image"
import path from "path"

export const getStaticPaths: GetStaticPaths = async () => {
	const files = fs.readdirSync(path.join("work"))

	const paths = files.map((filename) => ({
		params: {
			slug: filename.replace(".mdx", ""),
		},
	}))

	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const markdownWithMeta = fs.readFileSync(
		path.join("work", params?.slug + ".mdx"),
		"utf-8"
	)

	const { data: frontMatter, content } = matter(markdownWithMeta)
	const mdxSource = await serialize(content)

	return {
		props: {
			frontMatter,
			slug: params?.slug,
			mdxSource,
		},
	}
}

type WorkPagePostProps = {
	frontMatter: {
		title: string
		thumbnailUrl: string
		[key: string]: any
	}
	slug: string
	mdxSource: any
}

const components = {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
	Code,
	Flex,
	NextImage,
	Text,
	VStack,
}

const WorkPostPage: NextPage<WorkPagePostProps> = ({
	frontMatter,
	slug,
	mdxSource,
}) => {
	return (
		<PageLayout title={frontMatter.title}>
			<MDXRemote {...mdxSource} components={components} />
		</PageLayout>
	)
}

export default WorkPostPage
