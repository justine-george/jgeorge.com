import React, { useState, useEffect } from "react";
import defaultNotFoundImage from "@/assets/cat_not_working_1.jpeg";
import { notFoundImages } from "@/site-config";

export default function CatNotFound() {
	const [catImgSrc, setCatImgSrc] = useState("");
	const [isImageLoaded, setIsImageLoaded] = useState(false);

	useEffect(() => {
		const img = new Image();
		const currentIndex = parseInt(
			localStorage.getItem("catNotFoundIndex") || Math.floor(Math.random() * notFoundImages.length),
		);
		const nextIndex = (currentIndex + 1) % notFoundImages.length;
		const nextImage = notFoundImages[nextIndex] || defaultNotFoundImage;

		img.onload = () => {
			setCatImgSrc(nextImage.src);
			setIsImageLoaded(true);
			localStorage.setItem("catNotFoundIndex", nextIndex.toString());
		};

		img.onerror = () => {
			setCatImgSrc(defaultNotFoundImage.src);
			setIsImageLoaded(true);
			localStorage.setItem("catNotFoundIndex", "0");
		};

		img.src = nextImage.src;
	}, []);

	return isImageLoaded ? (
		<img
			src={catImgSrc}
			className={"max-h-96 w-full max-w-xs rounded-lg object-cover object-center saturate-50"}
			alt="A confused cat stopped working, indicating its confused about the current page"
		/>
	) : (
		<div>
			<code></code>
		</div>
	);
}
