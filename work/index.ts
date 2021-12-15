import BuildingDatasetsThumbnail from "@images/work/building-datasets/thumbnail.jpeg"
import HeadcountAllocationModelingThumbnail from "@images/work/headcount-allocation-modeling/thumbnail.jpeg"
import ImplementingAuditDataAnalyticsThumbnail from "@images/work/implementing-audit-data-analytics/thumbnail.jpeg"

export type WorkPost = {
	title: string
	description: string
	thumbnail: StaticImageData
}

export const WORK_POSTS: WorkPost[] = [
	{
		title: "Building Datasets",
		description:
			"Data can lead to better insights, forecasts and analysis, but only if it's cleaned and organized. Here, I played a part in validating data and querying large datasets so internal business partners could easily access financial data on demand.",
		thumbnail: BuildingDatasetsThumbnail,
	},
	{
		title: "Headcount Allocation Modeling",
		description:
			"Sometimes the way finance sees costs does not line up with the way clients sees costs. For this case, I designed a headcount allocation model to provide our internal business partners with visibility into their expenses.",
		thumbnail: HeadcountAllocationModelingThumbnail,
	},
	{
		title: "Implementing Audit Data Analytics",
		description:
			"Sometimes the way finance sees costs does not line up with the way clients sees costs. For this case, I designed a headcount allocation model to provide our internal business partners with visibility into their expenses.",
		thumbnail: ImplementingAuditDataAnalyticsThumbnail,
	},
]
