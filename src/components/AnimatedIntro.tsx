import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SkeletonLoader = React.memo(() => (
	<div className="animate-pulse space-y-[40px] sm:space-y-[39px]">
		<div className="h-9 w-5/6 rounded-lg bg-loadingSkeletonHeader sm:h-11 sm:w-5/12"></div>
		<div className="space-y-2">
			{[...Array(3)].map((_, index) => (
				<div key={index} className="h-5 rounded bg-loadingSkeleton" />
			))}
			{[...Array(4)].map((_, index) => (
				<div key={index} className="h-5 rounded bg-loadingSkeleton sm:hidden" />
			))}
			<div className="h-5 w-2/12 rounded bg-loadingSkeleton sm:w-1/2" />
		</div>
		<div className="space-y-2">
			{[...Array(4)].map((_, index) => (
				<div key={index} className="h-5 rounded bg-loadingSkeleton" />
			))}
			{[...Array(4)].map((_, index) => (
				<div key={index} className="h-5 rounded bg-loadingSkeleton sm:hidden" />
			))}
			<div className="h-5 w-3/12 rounded bg-loadingSkeleton sm:w-3/12" />
		</div>
		<div className="space-y-2">
			{[...Array(1)].map((_, index) => (
				<div key={index} className="h-5 rounded bg-loadingSkeleton" />
			))}
			{[...Array(2)].map((_, index) => (
				<div key={index} className="h-5 rounded bg-loadingSkeleton sm:hidden" />
			))}
			<div className="h-5 w-3/12 rounded bg-loadingSkeleton sm:w-2/3" />
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
			A Software Engineer with a Master's in Computer Science from UT Dallas and over 3.5 years of
			experience in scalable backend systems. I'm currently focused on building backend systems for
			entitlements management and authorization platforms within the Digital Identity team at SoFi,
			contributing to SoFi's growth in the fintech space.
		</p>
		<p>
			Specializing in Java, Kotlin, and building scalable REST APIs and performant backend
			applications, I work on mission-critical systems with a strong focus on performance and
			security. I've deployed distributed systems on AWS and GCP, and previously at Oracle, I
			optimized banking services globally. At Resi Media, I improved backend scalability to support
			video streaming operations.
		</p>
		<p>
			Ready to tackle complex challenges in backend roles, particularly in the fintech space.
			Outside of work, I enjoy indie PC/console games and street photography.
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
