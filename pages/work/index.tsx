import { Box } from "@chakra-ui/layout"
import { PageLayout } from "@components/PageLayout"
import { WorkPostPreview } from "@components/Work"
import fs from "fs"
import matter from "gray-matter"
import type { GetStaticProps, NextPage } from "next"
import path from "path"
import { getPlaiceholder } from "plaiceholder"
import Masonry from "react-masonry-css"

export const getStaticProps: GetStaticProps = async () => {
	const files = fs.readdirSync(path.join("work"))

	const workPosts = []
	for (const filename of files) {
		const markdownWithMeta = fs.readFileSync(path.join("work", filename))
		const { data: frontMatter } = matter(markdownWithMeta)

		const placeholder = await getPlaiceholder(frontMatter.thumbnailUrl)
		frontMatter.thumbnailBlur = placeholder.base64

		workPosts.push({
			frontMatter,
			slug: filename.split(".")[0],
		})
	}

	return {
		props: {
			workPosts,
		},
	}
}

type WorkPageProps = {
	workPosts: {
		frontMatter: {
			title: string
			description: string
			thumbnailUrl: string
			thumbnailBlur: string
			[key: string]: any
		}
		slug: string
	}[]
}

const WorkPage: NextPage<WorkPageProps> = ({ workPosts }) => {
	return (
		<PageLayout seoTitle="Work" pageTitle="My Experience">
			<Box
				sx={{
					".work-post-grid": {
						display: "flex",
						ml: -5,
						mb: -5,
						w: "auto",
					},
					".work-post-grid-col": {
						pl: 5,
						bgClip: "padding-box",
						"& .work-post-preview": {
							mb: 5,
						},
					},
				}}
			>
				<Masonry
					className="work-post-grid"
					columnClassName="work-post-grid-col"
					breakpointCols={{ default: 2, 640: 1 }}
				>
					{workPosts.map((post) => (
						<WorkPostPreview
							{...post.frontMatter}
							slug={post.slug}
							key={`${post.frontMatter.title}-post-preview`}
						/>
					))}
				</Masonry>
			</Box>
		</PageLayout>
	)
}

export default WorkPage
