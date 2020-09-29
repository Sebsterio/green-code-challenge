import React from "react";
import AuthPage from "components/AuthPage";
import usePreloadAssets from "hooks/usePreloadAssets";

// to preload
import Logo from "images/logo-r.svg";

const App = () => {
	// I wouldn't do this in production due to performance loss
	// but it improves the impression of the demo
	const ready = usePreloadAssets({ images: Logo });
	if (!ready) return null;

	return (
		<div className="App">
			<main>
				<AuthPage />
			</main>
		</div>
	);
};

export default App;
