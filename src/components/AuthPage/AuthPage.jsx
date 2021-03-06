import React from "react";
import SplashPage from "components/SplashPage";
import Card from "components/Card";
import Logo from "components/Logo";
import Typography from "components/Typography";
import Input from "components/Input";
import Checkbox from "components/Checkbox";
import Submit from "components/Submit";
import DelayedFadeIn from "components/DelayedFadeIn";

const AuthPage = () => {
	const signIn = (e) => {
		e.preventDefault();
		const { email, remember } = e.target;
		alert(`Email: ${email.value}\nRemember: ${remember.checked}`);
	};

	return (
		<SplashPage>
			<form onSubmit={signIn}>
				<Card
					animateOnEnter
					header={
						<DelayedFadeIn>
							<Logo />
						</DelayedFadeIn>
					}
					main={
						<>
							<Typography
								heading="Example login screen"
								subheading="Getting started with Green."
							/>

							<Input name="email" type="email" autoFocus>
								Email Address
							</Input>

							<Checkbox name="remember">Remember this device</Checkbox>
						</>
					}
					footer={
						<DelayedFadeIn>
							<Submit>Sign in</Submit>
						</DelayedFadeIn>
					}
				/>
			</form>
		</SplashPage>
	);
};

export default AuthPage;
