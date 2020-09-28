import React, { useEffect, useState } from "react";
import "./SplashPage.scss";

const SplashPage = ({ children }) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<div className={"SplashPage" + (mounted ? " active" : "")}>{children}</div>
	);
};

export default SplashPage;
