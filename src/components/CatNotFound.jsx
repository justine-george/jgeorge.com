import React, { useState } from "react";
import defaultNotFoundImage from "@/assets/cat_not_working_1.jpeg";
import { notFoundImages } from "@/site-config";

export default function CatNotFound() {
	const initialCatImgSrc =
        notFoundImages[Math.floor(Math.random() * notFoundImages.length)] || defaultNotFoundImage;
    const [catImgSrc, setCatImgSrc] = useState(initialCatImgSrc.src);

	return (
		<img
			src={catImgSrc}
			className={"h-64 w-full rounded-lg object-cover object-center"}
			alt="A confused cat stopped working, indicating its confused about the current page"
		/>
	);
}
