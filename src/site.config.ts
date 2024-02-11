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

export const resumeLink: string = "/docs/Justine_George_Resume.pdf";

export const experiences: Array<Experience> = [
	{
		title: "Software Engineer Intern (Backend)",
		// prevTitles: [{ title: "", endDate: new Date("") }],
		company: "Resi Media",
		// location: "Allen, TX", // ? Maybe add this back in later
		startDate: new Date("2023-05-22"),
		endDate: new Date("2023-08-18"),
		description: "Content Library Team — Resi On Demand",
		technologies: [
			"Java",
			"Spring Boot",
			"TypeScript",
			"Docker",
			"GCP",
			"Redis",
			"Cassandra",
			"TestNG",
		],
		links: {
			company: "https://resi.io/resi-on-demand/",
		},
	},
	{
		title: "Software Developer (Full Stack)",
		company: "Oracle Financial Services",
		// location: "Bengaluru, India", // ? Maybe add this back in later
		startDate: new Date("2019-08-12"),
		endDate: new Date("2022-07-16"),
		description: "Interest and Charges Team — Oracle FLEXCUBE Universal Banking",
		technologies: [
			"Java",
			"Spring Boot",
			"JUnit",
			"Docker",
			"Oracle SQL",
			"Swagger",
			"JavaScript",
			"HTML",
			"CSS",
		],
		links: {
			company: "https://www.oracle.com/financial-services/banking/flexcube/core-banking-software/",
		},
	},
	{
		title: "Software Developer Intern (Android)",
		company: "Storilabs",
		// location: "Calicut, India", // ? Maybe add this back in later
		startDate: new Date("2018-04-01"),
		endDate: new Date("2018-07-31"),
		description: "Storimart Team — B2B E-commerce Platform",
		technologies: [
			"Java",
			"Retrofit",
			"Firebase",
			"XML",
			"SQlite (Room)",
			"OkHttp",
			"Material Design",
		],
		links: {
			company: "https://storimart.com/",
		},
	},
];

export const projects: Array<Project> = [
	{
		title: "Tab Keeper (Featured on Web Store)",
		description:
			"Chrome extension for efficient tab management and cross-device syncing using the chrome.storage API.",
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
		title: "Book Fellow: For Bibliophiles",
		description:
			"Spring Boot and PostgreSQL-based social media platform for book enthusiasts to share favorites and connect with readers.",
		links: {
			github: "https://github.com/justine-george/book-fellow-backend-spring",
			demo: "",
		},
		technologies: ["Java", "PostgreSQL", "Docker", "AWS EC2", "Prometheus", "Grafana", "JUnit"],
		isFeatured: true,
		thumbnail: bookfellowThumbnail,
	},
	{
		title: "Planet: Event Planner App",
		description:
			"Next.js-based event planner with React, MongoDB, Redux, and Passport.js for intuitive planning and user role management.",
		links: {
			github: "https://github.com/justine-george/planet-nextjs",
			demo: "",
		},
		technologies: ["Next.js", "React", "Redux", "MongoDB", "Passport.js", "Emotion CSS"],
		isFeatured: true,
		thumbnail: planetThumbnail,
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
		title: "Indian Judiciary ML Tool for NLP-Driven Case Analysis and Bilingual Translation",
		description:
			"Machine learning interface for the Indian Judicial System, featuring NLP applications like case analysis, centralized databases, and bilingual translation.",
		links: {
			github: "https://github.com/justine-george/Application-of-NLP-in-Indian-Judiciary",
			demo: "",
		},
		technologies: ["Natural Language Processing", "Python", "Kivy", "NLTK", "Scikit-learn"],
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
