import React from "react";
import logoSrc from "images/logo-r.svg";
import "./Logo.scss";

const Logo = () => {
	return <img className="Logo" src={logoSrc} alt="Company logo" />;
};

export default Logo;
