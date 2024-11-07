import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SkeletonLoader = React.memo(() => (
	<div className="animate-pulse space-y-[40px] sm:space-y-[39px]">
		<div className="h-9 w-5/6 rounded-lg bg-loadingSkeletonHeader sm:h-11 sm:w-5/12"></div>
		<div className="space-y-2">
			{[...Array(2)].map((_, index) => (
				<div key={index} className="h-5 rounded bg-loadingSkeleton" />
			))}
			{[...Array(2)].map((_, index) => (
				<div key={index} className="h-5 rounded bg-loadingSkeleton sm:hidden" />
			))}
			<div className="h-5 w-4/12 rounded bg-loadingSkeleton sm:w-2/3" />
		</div>
		<div className="space-y-2">
			{[...Array(4)].map((_, index) => (
				<div key={index} className="h-5 rounded bg-loadingSkeleton" />
			))}
			{[...Array(3)].map((_, index) => (
				<div key={index} className="h-5 rounded bg-loadingSkeleton sm:hidden" />
			))}
			<div className="h-5 w-2/12 rounded bg-loadingSkeleton sm:w-1/5" />
		</div>
		<div className="space-y-2">
			{[...Array(1)].map((_, index) => (
				<div key={index} className="h-5 rounded bg-loadingSkeleton" />
			))}
			{[...Array(1)].map((_, index) => (
				<div key={index} className="h-5 rounded bg-loadingSkeleton sm:hidden" />
			))}
			<div className="h-5 w-4/12 rounded bg-loadingSkeleton sm:w-4/12" />
		</div>
	</div>
));
SkeletonLoader.displayName = "SkeletonLoader";

const ContentSection = React.memo(() => (
	<motion.section
		initial={{ opacity: 0, y: -5 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.5 }}
		aria-label="Landing page intro"
		className="space-y-8"
		data-pagefind-body
	>
		<h1 className="title text-4xl">I am Justine George.</h1>
		<p className="font-semibold">
			A Senior Software Engineer with a Master's in Computer Science from UT Dallas and over 3.5
			years of experience in scalable backend systems. I lead a remote team at Holiday Channel,
			driving innovation in the holiday-themed e-commerce space.
		</p>
		<p>
			Specializing in Java, Python, Go, and TypeScript, I build robust RESTful APIs and
			microservices with a focus on performance and security. I've deployed distributed systems on
			AWS and GCP and implemented AI-driven personalization using LLMs and RAG to enhance user
			engagement. Previously at Oracle, I optimized banking services globally, and at Resi Media, I
			improved backend scalability.
		</p>
		<p>
			Ready to tackle complex challenges in backend or full-stack roles. Outside of work, I enjoy
			indie PC games and street photography.
		</p>
	</motion.section>
));
ContentSection.displayName = "ContentSection";

const AnimatedIntro: React.FC = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Use requestAnimationFrame to defer the state update to the next frame
		const frame = requestAnimationFrame(() => {
			setIsLoading(false);
		});

		// Clean up
		return () => cancelAnimationFrame(frame);
	}, []);

	const memoizedSkeletonLoader = useMemo(
		() => (
			<motion.div
				key="skeleton"
				initial={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.2 }}
			>
				<SkeletonLoader />
			</motion.div>
		),
		[],
	);

	return (
		<AnimatePresence mode="wait">
			{isLoading ? memoizedSkeletonLoader : <ContentSection />}
		</AnimatePresence>
	);
};

export default AnimatedIntro;
