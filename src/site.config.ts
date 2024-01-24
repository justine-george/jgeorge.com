import type { Project, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
	// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
	author: "Justine George",
	// Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
	title: "Justine George",
	// Meta property used as the default description meta property
	description:
		"Hey, I'm Justine! I'm a software engineer based in USA, and I love to build things.",
	// HTML lang property, found in src/layouts/Base.astro L:18
	lang: "en-GB",
	// Meta property, found in src/components/BaseHead.astro L:42
	ogLocale: "en_GB",
	// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
	date: {
		locale: "en-GB",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
	webmentions: {
		link: "",
		// link: "https://webmention.io/jgeorge.pages.dev/webmention",
	},
};

// Used to generate links in both the Header & Footer.
export const menuLinks: Array<{ title: string; path: string }> = [
	{
		title: "Home",
		path: "/",
	},
	// {
	// 	title: "Work",
	// 	path: "/work/",
	// },
	{
		title: "Links",
		path: "/links/",
	},
	{
		title: "Posts",
		path: "/posts/",
	},
	{
		title: "About",
		path: "/about/",
	},
	// {
	// 	title: "Resume",
	// 	path: "/resume/",
	// },
];

// export const resumeLink: string =
// 	"https://drive.google.com/file/d/1e2FBiYFpmFpnS23UB0Ym8NShkX4YZUVF/view?usp=drive_link";
export const resumeLink: string = "/docs/Justine_George_Resume.pdf";

export const projects: Array<Project> = [
	{
		title: "Tab Keeper (Featured Chrome Extension)",
		description:
			"Efficiently save and synchronize chrome tabs across devices without the need for personal logins",
		links: {
			github: "https://github.com/justine-george/tab-keeper-react-chrome-extension",
			demo: "https://chromewebstore.google.com/detail/tab-keeper-chrome-tab-man/gpibgniomobngodpnikhheifblbpbbah?ref=portfolio",
		},
		isFeatured: true,
	},
	{
		title: "Book Fellow",
		description:
			"A social media platform for bibliophiles to share their favorite books and connect with other readers",
		links: {
			github: "https://github.com/justine-george/book-fellow-backend-spring",
			demo: "",
		},
		isFeatured: true,
	},
	{
		title: "Planet - Event Planner App",
		description:
			"An event planner application built with Next.js, React, MongoDB, Redux, and Passport.js",
		links: {
			github: "https://github.com/anthea97/planet",
			demo: "",
		},
		isOtherProject: true,
	},
	{
		title: "Seeking Tutor Problem",
		description:
			"A solution that synchronizes the activities of the coordinator, tutors, and students using POSIX threads, mutex locks, and semaphores",
		links: {
			github: "https://github.com/justine-george/Seeking-Tutor-Problem-POSIX-Threads",
			demo: "",
		},
		isOtherProject: true,
	},
	{
		title: "Lottery Scheduler for Xv6",
		description:
			"Implementation of a lottery scheduler in the Xv6 kernel, replacing the round-robin algorithm for process scheduling",
		links: {
			github: "https://github.com/justine-george/Lottery-Scheduling-XV6",
			demo: "",
		},
	},
	{
		title: "8 Men Morris Game",
		description:
			"A variant of the classic nine men's morris board game, implemented using both MiniMax and Alpha-Beta pruning algorithms",
		links: {
			github: "https://github.com/justine-george/morris-game-variant-project",
			demo: "",
		},
	},
	{
		title: "Customer Churn Predictor",
		description:
			"Predict customer churn in a telco using a dataset containing demographic and service data",
		links: {
			github: "https://github.com/justine-george/telco-customer-churn-prediction",
			demo: "",
		},
	},

	{
		title: "URL Shortener",
		description:
			"A URL shortener microservice on node backend that returns a minified URL for a given input URL",
		links: {
			github: "https://github.com/justine-george/url-shortener-service",
			demo: "",
		},
	},
	{
		title: "EZ Cart",
		description:
			"An ecommerce app built using React that allows users to browse through a list of products, view the details of a product, add it to a cart, and move items between the cart and wishlist",
		links: {
			github: "https://github.com/justine-george/EZCart-Web",
			demo: "",
		},
	},
	{
		title: "Daily Catalog Generator for Businesses",
		description:
			"A tool made for local businesses to create their daily price catalogs, with local language support",
		links: {
			github: "https://github.com/justine-george/store-catalogue-graphic-generator",
			demo: "https://nanthalathstore-catalogue-generator.pages.dev/",
		},
	},
	{
		title: "File System Checker for Xv6",
		description:
			"A tool to check the consistency of the xv6 file system image, including analyzing the on-disk format and writing checks to verify the consistency of various parts of the file system structure",
		links: {
			github: "https://github.com/justine-george/File-System-Checker-for-XV6",
			demo: "",
		},
	},
	{
		title: "Judgement Predictor for the Indian Judiciary",
		description:
			"A tool that that allows users to input data related to a current case and receive possible judgement using machine learning",
		links: {
			github: "https://github.com/justine-george/Application-of-NLP-in-Indian-Judiciary",
			demo: "",
		},
	},
];
