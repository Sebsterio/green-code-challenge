import React, { Suspense } from "react";
import AuthPage from "components/AuthPage";

const App = () => {
	return (
		<Suspense fallback={null}>
			<div className="App">
				<main>
					<AuthPage />
				</main>
			</div>
		</Suspense>
	);
};

export default App;
