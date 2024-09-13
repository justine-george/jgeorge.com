import { motion } from "framer-motion";

const AnimatedIntro: React.FC = () => {
	return (
		<motion.section
			initial={{ opacity: 0, y: -10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			aria-label="Landing page intro"
			className="space-y-8"
			data-pagefind-body
		>
			<h1 className="title text-4xl">I am Justine George.</h1>
			<p className="font-semibold">
				An adaptive and detail-oriented Senior Software Engineer with a Master's degree in Computer
				Science from UT Dallas and over 3 years of professional experience. I currently lead a
				remote team of 10 developers at Holiday Channel, a Colorado-based startup revolutionizing
				the holiday-themed e-commerce space.
			</p>
			<p>
				I specialize in developing and optimizing scalable backend systems using Java, Python, Go,
				and TypeScript. My expertise includes building robust RESTful APIs, microservices
				architectures, and full-stack applications, all with a strong focus on performance and
				security. I have deployed and managed distributed systems on AWS and GCP cloud platforms,
				and implemented AI-driven features using Large Language Models (LLMs) and
				Retrieval-Augmented Generation (RAG) techniques to deliver personalized content and improve
				user engagement.
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
