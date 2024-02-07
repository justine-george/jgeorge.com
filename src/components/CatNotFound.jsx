import React from "react";
import defaultNotFoundImage from "@/assets/cat_not_working_1.jpeg";
import { notFoundImages } from "@/site-config";

export default function CatNotFound() {
	const catImg =
		notFoundImages[Math.floor(Math.random() * notFoundImages.length)] || defaultNotFoundImage;
	console.log(catImg.src);

	return (
		<img
			src={catImg.src}
			className={"h-64 w-full rounded-lg object-cover object-center"}
			alt="A confused cat stopped working, indicating its confused about the current page"
		/>
	);
}
