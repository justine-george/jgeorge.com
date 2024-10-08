import { defineConfig } from "astro/config";
import { readFileSync } from "fs";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import remarkUnwrapImages from "remark-unwrap-images";
import rehypeExternalLinks from "rehype-external-links";
import { remarkReadingTime } from "./src/utils/remark-reading-time";
import icon from "astro-icon";
import astroExpressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
	// ! Please remember to replace the following site property with your own domain
	site: "https://www.jgeorge.dev/",
	markdown: {
		remarkPlugins: [remarkUnwrapImages, remarkReadingTime],
		rehypePlugins: [
			[
				rehypeExternalLinks,
				{
					target: "_blank",
					rel: ["nofollow, noopener, noreferrer"],
				},
			],
		],
		remarkRehype: {
			footnoteLabelProperties: {
				className: [""],
			},
		},
		// shikiConfig: {
		//   theme: "dracula",
		//   wrap: false
		// }
	},
	integrations: [
		astroExpressiveCode({
			themes: ["github-dark", "github-light"],
			frames: {
				// showCopyToClipboardButton: false,
			},
			styleOverrides: {
				borderRadius: "0rem",
				frames: {
					shadowColor: "bg",
				},
			},
		}),
		mdx({}),
		tailwind({
			applyBaseStyles: false,
		}),
		sitemap(),
		react(),
		icon(),
	],
	image: {
		domains: ["webmention.io"],
	},
	// https://docs.astro.build/en/guides/prefetch/
	prefetch: true,
	vite: {
		plugins: [rawFonts([".ttf"])],
		optimizeDeps: {
			exclude: ["@resvg/resvg-js"],
		},
	},
	redirects: {
		"/projects/tab-keeper": "https://github.com/justine-george/tab-keeper-react-chrome-extension",
		"/projects/book-fellow": "https://github.com/justine-george/book-fellow-backend-spring",
		"/projects/planet-nextjs": "https://github.com/justine-george/planet-nextjs",
		"/resume": "/docs/Justine_George_SoftwareEngineer_Resume.pdf",
	},
});
function rawFonts(ext: Array<string>) {
	return {
		name: "vite-plugin-raw-fonts",
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore:next-line
		transform(_, id) {
			if (ext.some((e) => id.endsWith(e))) {
				const buffer = readFileSync(id);
				return {
					code: `export default ${JSON.stringify(buffer)}`,
					map: null,
				};
			}
		},
	};
}
