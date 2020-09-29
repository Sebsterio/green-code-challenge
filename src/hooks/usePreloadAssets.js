import { useState } from "react";
import useMountEffect from "./useMountEffect ";

// Convert item to array if it isn't one already
const arrayify = (item) => (Array.isArray(item) ? item : [item]);

// Create an image without attaching it to the DOM
const preloadImage = ({ src, onload, onerror }) => {
	const img = new Image();
	img.onload = onload;
	img.onerror = onerror;
	img.src = src;
};

// load assets in the background and return true when all done
const usePreloadAssets = (assets) => {
	const images = arrayify(assets.images);
	const numAssetsToLoad = images.length;
	const [numAssetsLoaded, setNumAssetsLoaded] = useState(0);

	const incrementAssetsLoaded = () =>
		setNumAssetsLoaded((numAssetsLoaded) => numAssetsLoaded + 1);

	const abort = () => setNumAssetsLoaded(numAssetsToLoad);

	// Run useEffect once
	useMountEffect(() => {
		images.forEach((src) =>
			preloadImage({
				src,
				onload: incrementAssetsLoaded,
				onerror: abort,
			})
		);
	}, [images, abort]);

	return numAssetsLoaded === numAssetsToLoad;
};

export default usePreloadAssets;
