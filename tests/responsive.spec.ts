import { expect, test } from "@playwright/test";

const mobileViewports = [
	{ name: "iPhone 15 Pro", width: 393, height: 852 },
	{ name: "narrow mobile", width: 320, height: 568 },
] as const;

for (const viewport of mobileViewports) {
	for (const path of ["/", "/projects/"] as const) {
		test(`${path} fits the ${viewport.name} viewport`, async ({ page }) => {
			await page.setViewportSize(viewport);
			await page.goto(path);
			await page.locator("main img").first().waitFor();

			const layout = await page.evaluate(() => ({
				viewportWidth: document.documentElement.clientWidth,
				pageWidth: document.documentElement.scrollWidth,
				overflowingElements: [...document.querySelectorAll<HTMLElement>("body *")]
					.map((element) => {
						const bounds = element.getBoundingClientRect();
						return {
							element: element.outerHTML.slice(0, 160),
							left: bounds.left,
							right: bounds.right,
						};
					})
					.filter(({ left, right }) => left < 0 || right > document.documentElement.clientWidth),
				thumbnails: [...document.querySelectorAll<HTMLImageElement>("main img")].map((image) => {
					const imageBounds = image.getBoundingClientRect();
					const containerBounds = image.parentElement?.getBoundingClientRect();

					return {
						left: imageBounds.left,
						right: imageBounds.right,
						contentWidth: image.clientWidth,
						contentHeight: image.clientHeight,
						naturalWidth: image.naturalWidth,
						naturalHeight: image.naturalHeight,
						containerLeft: containerBounds?.left ?? 0,
						containerRight: containerBounds?.right ?? 0,
					};
				}),
			}));

			expect(
				layout.pageWidth,
				`page has horizontal overflow: ${JSON.stringify(layout.overflowingElements, null, 2)}`,
			).toBeLessThanOrEqual(layout.viewportWidth);
			for (const thumbnail of layout.thumbnails) {
				expect(
					thumbnail.left,
					"thumbnail escapes its container on the left",
				).toBeGreaterThanOrEqual(thumbnail.containerLeft - 0.5);
				expect(thumbnail.right, "thumbnail escapes its container on the right").toBeLessThanOrEqual(
					thumbnail.containerRight + 0.5,
				);
				if (thumbnail.naturalWidth > 0 && thumbnail.naturalHeight > 0) {
					const renderedRatio = thumbnail.contentWidth / thumbnail.contentHeight;
					const naturalRatio = thumbnail.naturalWidth / thumbnail.naturalHeight;
					expect(renderedRatio, "thumbnail aspect ratio is distorted").toBeCloseTo(naturalRatio, 2);
				}
			}

			await page.screenshot({
				path: `test-results/${path === "/" ? "home" : "projects"}-${viewport.width}.png`,
				fullPage: true,
			});
		});
	}
}

test("project layout stays responsive when thumbnails fail to load", async ({ page }) => {
	await page.setViewportSize({ width: 320, height: 568 });
	await page.route("**/*", (route) =>
		route.request().resourceType() === "image" ? route.abort() : route.continue(),
	);
	await page.goto("/projects/");

	const layout = await page.evaluate(() => ({
		viewportWidth: document.documentElement.clientWidth,
		pageWidth: document.documentElement.scrollWidth,
		thumbnailWidths: [...document.querySelectorAll<HTMLImageElement>("main img")].map(
			(image) => image.getBoundingClientRect().width,
		),
	}));

	expect(layout.pageWidth).toBeLessThanOrEqual(layout.viewportWidth);
	expect(layout.thumbnailWidths.length).toBeGreaterThan(0);
	expect(layout.thumbnailWidths.every((width) => width <= layout.viewportWidth)).toBe(true);
});
