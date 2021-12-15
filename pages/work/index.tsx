import { Box } from "@chakra-ui/layout"
import { PageLayout } from "@components/PageLayout"
import { WorkPostPreview } from "@components/Work"
import type { NextPage } from "next"
import Masonry from "react-masonry-css"
import { WORK_POSTS } from "work"

const WorkPage: NextPage = () => {
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
					{WORK_POSTS.map(({ title, description, thumbnail }) => (
						<WorkPostPreview
							title={title}
							description={description}
							thumbnail={thumbnail}
							slug={title.replace(/\s/g, "-").toLowerCase()}
							key={`${title}-post-preview`}
						/>
					))}
				</Masonry>
			</Box>
		</PageLayout>
	)
}

export default WorkPage
