import type { Experience, Project, SiteConfig } from "@/types";
import cat1 from "./assets/cat_not_working_1.jpeg";
import cat2 from "./assets/cat_not_working_2.jpeg";
import cat3 from "./assets/cat_not_working_3.jpeg";
import cat4 from "./assets/cat_not_working_4.jpeg";
import cat5 from "./assets/cat_not_working_5.jpeg";
import cat6 from "./assets/cat_not_working_6.jpeg";
import cat7 from "./assets/cat_not_working_7.jpeg";
import cat8 from "./assets/cat_not_working_8.jpeg";
import cat9 from "./assets/cat_not_working_9.jpeg";

import tabkeeperThumbnail from "/thumbnails/tab-keeper-thumbnail.png?url";
import bookfellowThumbnail from "/thumbnails/bookfellow-thumbnail.png?url";
import planetThumbnail from "/thumbnails/planet-thumbnail.png?url";

export const siteConfig: SiteConfig = {
	// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
	author: "Justine George",
	// Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
	title: "Justine George",
	// Meta property used as the default description meta property
	description:
		"Hey, I'm Justine! I'm a software engineer based in the US, and I love to build things.",
	// HTML lang property, found in src/layouts/Base.astro L:18
	lang: "en-US",
	// Meta property, found in src/components/BaseHead.astro L:42
	ogLocale: "en_US",
	// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
	date: {
		locale: "en-US",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
	webmentions: {
		link: "",
		// link: "https://webmention.io/www.jgeorge.dev/webmention",
	},
};

// const baseCatPath = "./assets/cat_not_working_";
// const numberOfCatImgs = 7;
// export const notFoundImages: Array<ImageMetadata> = await Promise.all(
// 	Array.from(
// 		{ length: numberOfCatImgs },
// 		async (_, index) =>
// 			(await import(/* @vite-ignore */ `${baseCatPath}${index + 1}.jpeg`)).default,
// 	),
// );
export const notFoundImages: Array<ImageMetadata> = [
	cat1,
	cat2,
	cat3,
	cat4,
	cat5,
	cat6,
	cat7,
	cat8,
	cat9,
];

// Used to generate links in both the Header & Footer.
export const menuLinks: Array<{ title: string; path: string }> = [
	{
		title: "About",
		path: "/",
	},
	{
		title: "Experience",
		path: "/experience/",
	},
	{
		title: "Projects",
		path: "/projects/",
	},
	{
		title: "Blog",
		path: "/posts/",
	},
	// {
	// 	title: "About",
	// 	path: "/about/",
	// },
	// {
	// 	title: "Resume",
	// 	path: "/resume/",
	// },
];

export const resumeLink: string = "/docs/Justine_George_SoftwareEngineer_Resume.pdf";

export const experiences: Array<Experience> = [
	{
		title: "Software Engineer Grad Intern",
		// prevTitles: [{ title: "", endDate: new Date("") }],
		company: "Resi Media",
		// location: "Allen, TX", // ? Maybe add this back in later
		startDate: new Date("2023-05-22"),
		endDate: new Date("2023-08-18"),
		// description: "Content Library Team — Resi On Demand.",
		description:
			// "In the Content Library Team for Resi On Demand, I developed scalable REST APIs, enabling enhanced access for over 5,000 churches to digital content. I implemented a monitoring solution on Google Cloud Platform using Terraform, which automates Slack notifications for video upload discrepancies, thus optimizing system alertness. Additionally, I directed a research project on converting MP4 videos to M4A audio formats with FFmpeg, guiding the roadmap for an audio-only download functionality.",
			"At Resi Media's Content Library Team, I engineered Spring Boot RESTful APIs to streamline content access for over 5,000 non-profit orgs, managing 1 million metadata requests monthly. I developed a GCP-based alert system with Terraform, analyzing over 1,000 video uploads weekly for improved system alerts via Slack. Additionally, I led technical research on extracting M4A audio from DASH MP4 streams with FFmpeg, enabling single-click audio downloads from the video archive.",
		technologies: [
			"Java",
			"Spring Boot",
			"Docker",
			"GCP (Pub/Sub)",
			"Redis",
			"Cassandra",
			"TestNG",
			"Node.js",
			"TypeScript",
		],
		links: {
			company: "https://resi.io/resi-on-demand/",
		},
	},
	{
		title: "Software Development Engineer",
		company: "Oracle",
		// location: "Bengaluru, India", // ? Maybe add this back in later
		startDate: new Date("2019-08-12"),
		endDate: new Date("2022-07-16"),
		// description: "Interest and Charges Team — Oracle FLEXCUBE Universal Banking",
		description:
			"In the Interest and Charges Team for Oracle FLEXCUBE Universal Banking, I built more than 30 RESTful APIs using Spring Boot and Spring Batch, improving service for over 900 global banks. I engineered a Python-based automation tool for SQL entry generation, significantly optimizing database updates for a crucial financial module, reducing processing time by 95%. This tool was adopted across cross-functional teams. By optimizing our app's architecture, I reduced its Docker image size by 40%, enhancing deployment speed. Additionally, I developed responsive UI components for a React-based SPA that increased our page load speed by 60%, significantly boosting system performance.",
		// "In Oracle's Interest and Charges Team, I developed REST APIs and a Python automation tool, streamlining operations for 900+ banks. Optimized application architecture, reducing Docker size by 40% and improving page load times by 60%.",
		technologies: [
			"Java",
			"Spring Boot",
			"Spring Batch",
			"Docker",
			"Redis",
			"Python",
			"JUnit",
			"SQL",
			"Oracle",
			"Swagger",
			"React",
			"JavaScript",
		],
		links: {
			company: "https://www.oracle.com/financial-services/banking/flexcube/core-banking-software/",
		},
	},
	{
		title: "Software Developer Intern",
		company: "Storilabs",
		// location: "Calicut, India", // ? Maybe add this back in later
		startDate: new Date("2018-04-01"),
		endDate: new Date("2018-07-31"),
		// description: "Storimart Team — B2B E-commerce Platform",
		description:
			// "In the Storimart Team for the B2B E-commerce Platform at Storilabs, as a Software Developer Intern focused on Android, I built a native app to enhance wholesaler-retailer interactions and purchasing processes. By integrating caching with OkHttp Interceptor and enabling local data storage with Room, I improved the app's performance and introduced offline functionality for the product catalog page, streamlining user access and transactions.",
			"At Storilabs, I created a native Android app for B2B communication, enhancing wholesaler-retailer transactions. Implemented caching and offline capabilities, significantly boosting app performance and user experience.",
		technologies: [
			"Java",
			"Retrofit",
			"Firebase",
			"SQlite (Room)",
			"OkHttp",
			"XML",
			"Material Design",
		],
		links: {
			company: "https://storimart.com/",
		},
	},
];

export const projects: Array<Project> = [
	{
		title: "Book Fellow: For Bibliophiles",
		description:
			"A social media platform for book lovers, enabling users to write reviews, curate favorite lists, and follow the reading activities of fellow readers.",
		links: {
			github: "https://github.com/justine-george/book-fellow-backend-spring",
			demo: "",
		},
		technologies: ["Java", "PostgreSQL", "Hibernate ORM", "Docker", "AWS (EC2, ElastiCache, SNS)"],
		isFeatured: true,
		thumbnail: bookfellowThumbnail,
	},
	{
		title: "Planet: Event Planner App",
		description:
			"An event planning platform built with Next.js, facilitating seamless event organization and providing role-specific access for users and administrators.",
		links: {
			github: "https://github.com/justine-george/planet-nextjs",
			demo: "",
		},
		technologies: ["Next.js", "React", "DynamoDB", "Docker", "AWS (Amplify, SQS)", "Passport.js"],
		isFeatured: true,
		thumbnail: planetThumbnail,
	},
	{
		title: "Tab Keeper (Featured on Web Store)",
		description:
			"Chrome extension for efficient tab management and cross-device syncing between Chrome browsers on desktop devices.",
		links: {
			github: "https://github.com/justine-george/tab-keeper-react-chrome-extension",
			storepage:
				"https://chromewebstore.google.com/detail/tab-keeper-chrome-tab-man/gpibgniomobngodpnikhheifblbpbbah?ref=portfolio",
		},
		technologies: ["TypeScript", "React", "Redux", "Cloud Firestore", "Emotion CSS", "Vitest"],
		isFeatured: true,
		thumbnail: tabkeeperThumbnail,
		metrics: {
			users: 531,
		},
	},
	{
		title: "Multi-threaded Simulation of a Tutoring Center with Priority Scheduling",
		description:
			"Multithreaded simulation of a tutoring center coordination system using POSIX threads, mutex locks, and semaphores in C.",
		links: {
			github: "https://github.com/justine-george/Seeking-Tutor-Problem-POSIX-Threads",
			demo: "",
		},
		technologies: ["C", "POSIX Threads", "Mutex Locks", "Semaphores", "GDB"],
		// isFeatured: true,
	},
	{
		title: "Lottery Scheduler Implementation in xv6",
		description:
			"Enhanced xv6 operating system kernel with a lottery scheduler, offering equitable CPU resource distribution through randomized process selection.",
		links: {
			github: "https://github.com/justine-george/Lottery-Scheduling-XV6",
			demo: "",
		},
		technologies: ["C", "Kernel Programming", "xv6", "GDB"],
	},
	{
		title: "URL Shortener Microservice",
		description:
			"Node.js and MongoDB based microservice for URL shortening, offering JSON responses and original URL redirection.",
		links: {
			github: "https://github.com/justine-george/url-shortener-service",
			demo: "",
		},
		technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Jest"],
	},
	{
		title: "8 Men Morris Game AI: MiniMax vs Alpha-Beta Pruning",
		description:
			"Implementation of the 8 Men Morris game using MiniMax and Alpha-Beta pruning algorithms, demonstrating AI strategies in game theory.",
		links: {
			github: "https://github.com/justine-george/morris-game-variant-project",
			demo: "",
		},
		technologies: ["Python", "MiniMax", "Alpha-Beta Pruning", "Game Theory"],
	},
	{
		title: "Customer Churn Prediction Using Machine Learning and Data Analysis",
		description:
			"Machine learning project for predicting telco customer churn, featuring extensive EDA, class imbalance handling, and multiple algorithm evaluations.",
		links: {
			github: "https://github.com/justine-george/telco-customer-churn-prediction",
			demo: "",
		},
		technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn", "Google Colab"],
	},
	{
		title: "EZ Cart",
		description:
			"React-based ecommerce app enabling product browsing, detailed views, and cart and wishlist management, with Material-UI and Axios integration.",
		links: {
			github: "https://github.com/justine-george/EZCart-Web",
			demo: "",
		},
		technologies: ["Spring Boot", "React", "Material-UI", "Axios"],
	},
	{
		title: "Vegetable Price Catalog Generator for Local Businesses",
		description:
			"Multilingual catalogue generator for local Kerala businesses, enabling effortless creation of PNG catalogues with dynamic pricing and vegetable selection.",
		links: {
			github: "https://github.com/justine-george/store-catalogue-graphic-generator",
			demo: "",
		},
		technologies: ["React", "Emotion CSS", "i18next", "html-to-image", "Vite"],
	},
	{
		title: "Indian Judiciary ML Tool for NLP-Driven Case Analysis and Bilingual Translation",
		description:
			"Machine learning interface for the Indian Judicial System, featuring NLP applications like case analysis, centralized databases, and bilingual translation.",
		links: {
			github: "https://github.com/justine-george/Application-of-NLP-in-Indian-Judiciary",
			demo: "",
		},
		technologies: ["Natural Language Processing", "Python", "Kivy", "NLTK", "Scikit-learn"],
	},
	// {
	// 	title: "File System Integrity Validator for xv6",
	// 	description:
	// 		"File system consistency checker for xv6 ensuring inode and block integrity in file system Images.",
	// 	links: {
	// 		github: "https://github.com/justine-george/File-System-Checker-for-XV6",
	// 		demo: "",
	// 	},
	// 	technologies: ["C", "xv6", "GDB"],
	// },
];
