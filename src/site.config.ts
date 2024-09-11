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

import nexusThumbnail from "/thumbnails/nexus-thumbnail.png?url";
import ragMdChatThumbnail from "/thumbnails/rag-md-chat-thumbnail.png?url";
import bookfellowThumbnail from "/thumbnails/bookfellow-thumbnail.png?url";
import tabkeeperThumbnail from "/thumbnails/tab-keeper-thumbnail.png?url";

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
		title: "Software Engineer (Full Stack)",
		// prevTitles: [{ title: "" }],
		company: "Holiday Channel",
		// location: "Seattle, WA", // ? Maybe add this back in later
		startDate: new Date("2024-08-13"),
		endDate: null,
		description:
			"At Holiday Channel, I'm leading a team of 10 developers building a holiday-themed e-commerce platform. We're using event-driven design to handle 300% traffic spikes during peak seasons. I'm also developing an AI chatbot with LangChain and OpenAI's API. It uses RAG to combine product data, customer history, and holiday info for personalized gift suggestions.",
		technologies: [
			"TypeScript",
			"LangChain",
			"OpenAI API",
			"Node.js",
			"Express",
			"PostgreSQL",
			"MongoDB",
			"AWS",
			"React",
		],
		links: {
			company: "https://www.linkedin.com/company/holidaychannel",
		},
	},
	{
		title: "Software Engineer Grad Intern (Backend)",
		// prevTitles: [{ title: "", endDate: new Date("") }],
		company: "Resi Media",
		// location: "Allen, TX", // ? Maybe add this back in later
		startDate: new Date("2023-05-22"),
		endDate: new Date("2023-08-18"),
		// description: "Content Library Team — Resi On Demand.",
		description:
			// "In the Content Library Team for Resi On Demand, I developed scalable REST APIs, enabling enhanced access for over 5,000 churches to digital content. I implemented a monitoring solution on Google Cloud Platform using Terraform, which automates Slack notifications for video upload discrepancies, thus optimizing system alertness. Additionally, I directed a research project on converting MP4 videos to M4A audio formats with FFmpeg, guiding the roadmap for an audio-only download functionality.",
			"As an intern on the Content Library Team for Resi On Demand, I developed scalable RESTful APIs using Spring Boot to support non-profit organizations globally. I improved system performance by implementing a Terraform-automated GCP alert system, reducing anomaly response time by 40%. Additionally, I designed an FFmpeg-based feature for the Content Library, which enhanced user accessibility by enabling efficient audio extraction from video streams.",
		technologies: [
			"Java",
			"Spring",
			"Docker",
			"GCP",
			"Terraform",
			"Cassandra",
			"Redis",
			"New Relic",
			"TestNG",
			"FFmpeg",
			"DASH",
		],
		links: {
			company: "https://resi.io/resi-on-demand/",
		},
	},
	{
		title: "Software Development Engineer (Full-Stack)",
		company: "Oracle",
		// location: "Bengaluru, India", // ? Maybe add this back in later
		startDate: new Date("2019-08-12"),
		endDate: new Date("2022-07-16"),
		// description: "Interest and Charges Team — Oracle FLEXCUBE Universal Banking",
		description:
			"As a member of the Interest and Charges Team for Oracle FLEXCUBE Universal Banking, I engineered over 30 RESTful API endpoints and Spring Batch processes, enhancing the core banking platform's efficiency for global financial institutions. I developed a Python CLI tool that accelerated Flyway SQL migration script creation by 95% and improved page load times by 60% through UI component optimization. Additionally, I streamlined app architecture, reducing Docker image size by 40%, and conducted over 350 code reviews, resulting in a 20% reduction in technical debt and enhanced overall product functionality.",
		// "In the Interest and Charges Team for Oracle FLEXCUBE Universal Banking, I built more than 30 RESTful APIs using Spring Boot and Spring Batch, improving service for over 900 global banks. I engineered a Python-based automation tool for SQL entry generation, significantly optimizing database updates for a crucial financial module, reducing processing time by 95%. This tool was adopted across cross-functional teams. By optimizing our app's architecture, I reduced its Docker image size by 40%, enhancing deployment speed. Additionally, I developed responsive UI components for a React-based SPA that increased our page load speed by 60%, significantly boosting system performance.",
		// "In Oracle's Interest and Charges Team, I developed REST APIs and a Python automation tool, streamlining operations for 900+ banks. Optimized application architecture, reducing Docker size by 40% and improving page load times by 60%.",
		technologies: [
			"Java",
			"Spring",
			"Python",
			"Docker",
			"SQL",
			"Oracle",
			"Redis",
			"JUnit",
			"Mockito",
			"Selenium",
			"React",
			"JavaScript",
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
		// description: "Storimart Team — B2B E-commerce Platform",
		description:
			// "In the Storimart Team for the B2B E-commerce Platform at Storilabs, as a Software Developer Intern focused on Android, I built a native app to enhance wholesaler-retailer interactions and purchasing processes. By integrating caching with OkHttp Interceptor and enabling local data storage with Room, I improved the app's performance and introduced offline functionality for the product catalog page, streamlining user access and transactions.",
			"During my internship at Storilabs, I developed a native Android app designed for B2B communication, which streamlined transactions between wholesalers and retailers. I implemented caching and offline capabilities, leading to a significant improvement in app performance and user experience.",
		technologies: [
			"Java",
			"Retrofit",
			"OkHttp",
			"Firebase Cloud Messaging",
			"Room",
			"SQLite",
			"XML",
		],
		links: {
			company: "https://storimart.com/",
		},
	},
];

export const projects: Array<Project> = [
	{
		title: "Nexus - Decentralized Messaging Service",
		description:
			"A decentralized messaging service that ensures secure, peer-to-peer communication with end-to-end encryption. Built using Go and WebRTC, Nexus offers a scalable infrastructure for seamless and private messaging.",
		links: {
			github: "https://github.com/justine-george/nexus-decentralized-messaging",
			demo: "",
		},
		technologies: ["Go", "WebRTC", "Docker", "gRPC", "Kubernetes", "TLS"],
		isFeatured: true,
		thumbnail: nexusThumbnail,
		ogImageLink:
			"https://opengraph.githubassets.com/511c03c1df2de44185b7190aba3d06ac59728c0488a230be9603b30a5f2a2988/justine-george/nexus-decentralized-messaging",
	},
	{
		title: "VectorDB-LLM Query Engine",
		description:
			"An AI-powered document query system using LangChain, ChromaDB, and OpenAI for efficient RAG-based information retrieval. It enables users to create a searchable database from markdown documents and query it using natural language.",
		links: {
			github: "https://github.com/justine-george/ai-markdown-llm-retrieval",
			demo: "",
		},
		technologies: ["Python", "LangChain", "Retrieval-Augmented Generation (RAG)", "Vector DBs"],
		isFeatured: true,
		thumbnail: ragMdChatThumbnail,
		ogImageLink:
			"https://opengraph.githubassets.com/b69f3d86723c9d0ad1308418c1fbf2a10b8c3668e67e6089c625dc799a8e458f/justine-george/ai-markdown-llm-retrieval",
	},
	{
		title: "Book Fellow - Social Media Web App",
		description:
			"A social media platform designed for book enthusiasts, Book Fellow allows users to write detailed reviews, create and share personalized reading lists, and track the reading activities of others in the community.",
		links: {
			github: "https://github.com/justine-george/book-fellow-backend-spring",
			demo: "https://book-fellow-frontend-react.pages.dev/",
		},
		technologies: ["Java", "Spring", "PostgreSQL", "Next.js", "AWS (EC2, S3, SNS, Lambda)"],
		isFeatured: true,
		thumbnail: bookfellowThumbnail,
		ogImageLink:
			"https://opengraph.githubassets.com/0249be65c0ca36f3201a33737ab34e7e404f5a1385233f244286dfdeedbc2b35/justine-george/book-fellow-backend-spring",
	},
	{
		title: "Tab Keeper - Chrome Extension",
		description:
			"A Chrome extension for streamlined tab management and cross-device synchronization, enabling users to effortlessly manage and access their open tabs across multiple desktop devices.",
		links: {
			github: "https://github.com/justine-george/tab-keeper-react-chrome-extension",
			storepage:
				"https://chromewebstore.google.com/detail/tab-keeper-chrome-tab-man/gpibgniomobngodpnikhheifblbpbbah?ref=portfolio",
		},
		technologies: ["TypeScript", "React", "Redux", "Cloud Firestore", "Emotion CSS", "Vitest"],
		isFeatured: true,
		thumbnail: tabkeeperThumbnail,
		metrics: {
			users: 1832,
		},
		ogImageLink:
			"https://opengraph.githubassets.com/bc38a30fb87a8ce5e21ec69c9d91e1ca4c4eb1d137b407c125378acbdf7581b9/justine-george/tab-keeper-react-chrome-extension",
	},
	{
		title: "Planet: Event Planner App",
		description:
			"An event planning platform developed with Next.js, Planet streamlines event organization by providing intuitive role-based access for users and administrators, ensuring a smooth and efficient planning process.",
		links: {
			github: "https://github.com/justine-george/planet-nextjs",
			demo: "",
		},
		technologies: ["Next.js", "React", "DynamoDB", "GraphQL", "Docker", "AWS (Amplify, SQS)"],
		isFeatured: false,
		ogImageLink:
			"https://opengraph.githubassets.com/fd8e597738ce5a59568fc81dc797c9b706164c188619480ab606a49918ef68a6/justine-george/planet-nextjs",
	},
	{
		title: "Multi-threaded Simulation of a Tutoring Center with Priority Scheduling",
		description:
			"A multithreaded simulation of a tutoring center's coordination system using POSIX threads, mutex locks, and semaphores in C, designed to manage scheduling and prioritize tutoring sessions effectively.",
		links: {
			github: "https://github.com/justine-george/Seeking-Tutor-Problem-POSIX-Threads",
			demo: "",
		},
		technologies: ["C", "POSIX Threads", "Mutex Locks", "Semaphores", "GDB"],
		ogImageLink:
			"https://opengraph.githubassets.com/5208d1fafaea3caa61f832339a5bc262f385d02bc13e83db9002f6fa4b2ec4b2/justine-george/Seeking-Tutor-Problem-POSIX-Threads",
	},
	{
		title: "Lottery Scheduler Implementation in xv6",
		description:
			"An enhancement to the xv6 operating system kernel introducing a lottery scheduler. This implementation improves CPU resource distribution by using randomized process selection, which ensures a fair and efficient allocation of CPU time among processes.",
		links: {
			github: "https://github.com/justine-george/Lottery-Scheduling-XV6",
			demo: "",
		},
		technologies: ["C", "Kernel Programming", "xv6", "GDB"],
		ogImageLink:
			"https://opengraph.githubassets.com/112a92019025d542745fed7621f59709130af54794829c32627879e87042982f/justine-george/Lottery-Scheduling-XV6",
	},
	{
		title: "8 Men Morris Game AI: MiniMax vs Alpha-Beta Pruning",
		description:
			"An AI implementation for the 8 Men Morris game utilizing MiniMax and Alpha-Beta pruning algorithms, showcasing advanced game theory strategies to enhance decision-making in gameplay.",
		links: {
			github: "https://github.com/justine-george/morris-game-variant-project",
			demo: "",
		},
		technologies: ["Python", "MiniMax", "Alpha-Beta Pruning", "Game Theory"],
		ogImageLink:
			"https://opengraph.githubassets.com/e7b6ea5bea45699c671d2c479732b0b8a857273c6c1f61c3c9f82e7d0bd4c0d3/justine-george/morris-game-variant-project",
	},
	{
		title: "Customer Churn Prediction Using Machine Learning and Data Analysis",
		description:
			"A machine learning project focused on predicting customer churn for a telecommunications company. This project includes extensive exploratory data analysis, handling of class imbalance, and evaluation of various predictive algorithms.",
		links: {
			github: "https://github.com/justine-george/telco-customer-churn-prediction",
			demo: "",
		},
		technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn", "Google Colab"],
		ogImageLink:
			"https://opengraph.githubassets.com/3b1467ee155cbaad73bcf4eb2964c5d90548e0676634b906641568296ccd123e/justine-george/telco-customer-churn-prediction",
	},
	{
		title: "Indian Judiciary ML Tool for NLP-Driven Case Analysis and Bilingual Translation",
		description:
			"A machine learning tool designed for the Indian Judicial System, employing NLP techniques for case analysis and offering bilingual translation capabilities to support legal professionals in their work.",
		links: {
			github: "https://github.com/justine-george/Application-of-NLP-in-Indian-Judiciary",
			demo: "",
		},
		technologies: ["Natural Language Processing", "Python", "Kivy", "NLTK", "Scikit-learn"],
		ogImageLink:
			"https://opengraph.githubassets.com/e9db2636ff7d70d6455d05475c6d75062e9f89f5288d98fa08ca9f8bb995b059/justine-george/Application-of-NLP-in-Indian-Judiciary",
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
	//  ogImageLink: "",
	// },
	{
		title: "EZ Cart",
		description:
			"An ecommerce application built with React, featuring product browsing, detailed item views, and comprehensive cart and wishlist management. Integrated with Material-UI and Axios for a smooth and responsive user experience.",
		links: {
			github: "https://github.com/justine-george/EZCart-Web",
			demo: "",
		},
		technologies: ["Spring Boot", "React", "Material-UI", "Axios"],
		ogImageLink:
			"https://opengraph.githubassets.com/12890d28fc2a27d934d3f203fcc1942e8961e2645ec6276323804db29b277671/justine-george/EZCart-Web",
	},
	{
		title: "Vegetable Price Catalog Generator for Local Businesses",
		description:
			"A multilingual catalogue generator tailored for local Kerala businesses, enabling the creation of dynamic PNG catalogues with customizable pricing and vegetable selection.",
		links: {
			github: "https://github.com/justine-george/store-catalogue-graphic-generator",
			demo: "",
		},
		technologies: ["React", "Emotion CSS", "i18next", "html-to-image", "Vite"],
		ogImageLink:
			"https://opengraph.githubassets.com/49b7803aa52154941ce4f2be391a73b99f4ab15db39e8e8c87a60069c9e95449/justine-george/store-catalogue-graphic-generator",
	},
];
