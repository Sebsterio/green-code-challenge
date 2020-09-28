import React, { useEffect, useState } from "react";
import "./SplashPage.scss";

const SplashPage = ({ children }) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		// Fix bug causing jittery animation
		setTimeout(() => {
			setMounted(true);
		}, 0);
	}, []);

	return (
		<div className={"SplashPage" + (mounted ? " active" : "")}>{children}</div>
	);
};

export default SplashPage;
