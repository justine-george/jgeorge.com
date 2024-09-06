import React from "react";
import { motion } from "framer-motion";

const AnimatedIntro: React.FC<{ children: React.ReactNode }> = () => {
	return (
		<motion.section
			initial={{ opacity: 0, y: -10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3 }}
			aria-label="Landing page intro"
			className="space-y-8"
			data-pagefind-body
		>
			<h1 class="title text-4xl">I am Justine George.</h1>
			<p class="font-semibold">
				An adaptive and detail-oriented software engineer with a Master's degree in Computer Science
				from UT Dallas and over 3 years of professional experience.
			</p>
			<p>
				I specialize in developing and optimizing scalable backend systems using Java, Python, Go, and
				TypeScript. My expertise includes building robust RESTful APIs, microservices architectures,
				and full-stack applications, all with a strong focus on performance and security. I have also
				deployed and managed distributed systems using AWS and GCP cloud services.
			</p>
			<p>
				My professional experience includes working as a full-stack software development engineer at
				Oracle, where I contributed to key projects enhancing global banking services, and as a
				backend software engineer intern at Resi Media, where I focused on backend improvements and
				system optimizations.
			</p>
			<p>
				I am eager to tackle complex challenges and contribute to impactful projects in backend or
				full-stack roles. Outside of work, I enjoy exploring indie PC games and capturing street and
				landscape photography.
			</p>
		</motion.section>
	);
};

export default AnimatedIntro;
