import React from "react";
import SplashPage from "components/SplashPage";
import Logo from "components/Logo";
import Typography from "components/Typography";
import Input from "components/Input";
import Checkbox from "components/Checkbox";
import Submit from "components/Submit";
import DelayedFadeIn from "components/DelayedFadeIn";
import "./AuthPage.scss";

const AuthPage = () => {
	const signIn = (e) => {
		e.preventDefault();
		const { email, remember } = e.target;
		alert(`Email: ${email.value}\nRemember: ${remember.checked}`);
	};

	return (
		<SplashPage>
			<div className="AuthPage__container">
				<DelayedFadeIn>
					<Logo />
				</DelayedFadeIn>

				<Typography
					heading="Example login screen"
					subheading="Getting started with Green."
				/>

				<form onSubmit={signIn}>
					<Input name="email" type="email" autoFocus>
						Email Address
					</Input>

					<Checkbox name="remember">Remember this device</Checkbox>

					<DelayedFadeIn>
						<Submit>Sign in</Submit>
					</DelayedFadeIn>
				</form>
			</div>
		</SplashPage>
	);
};

export default AuthPage;
