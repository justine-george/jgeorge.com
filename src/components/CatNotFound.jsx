import React, { useState, useEffect } from "react";
import defaultNotFoundImage from "@/assets/cat_not_working_1.jpeg";
import { notFoundImages } from "@/site-config";

export default function CatNotFound() {
	const [catImgSrc, setCatImgSrc] = useState("");
	const [isImageLoaded, setIsImageLoaded] = useState(false);

	useEffect(() => {
        const img = new Image();
        const randomImage = notFoundImages[Math.floor(Math.random() * notFoundImages.length)] || defaultNotFoundImage;
        
        img.onload = () => {
            setCatImgSrc(randomImage.src);
			setIsImageLoaded(true);
        };
        img.src = randomImage.src;
    }, []);

	return isImageLoaded ? (
			<img
			src={catImgSrc}
			className={"h-64 w-full rounded-lg object-cover object-center"}
			alt="A confused cat stopped working, indicating its confused about the current page"
		/>
		): (
			<div>
				<code>Loading...</code>
			</div>
		);
}
