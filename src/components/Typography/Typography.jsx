import React from "react";
import "./Typography.scss";

const Typography = ({ children, main = children, heading, subheading }) => {
	return (
		<div className="Typography">
			{heading && <h1 className="Typography__heading">{heading}</h1>}
			{subheading && <h2 className="Typography__sub-heading">{subheading}</h2>}
			{main && <p className="Typography__main">{main}</p>}
		</div>
	);
};

export default Typography;
