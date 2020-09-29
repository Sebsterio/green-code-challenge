import React from "react";
import "./Card.scss";

const Card = ({ header, main, footer, animateOnEnter }) => {
	let containerClasses = "Card";
	if (animateOnEnter) containerClasses += " animateOnEnter";

	return (
		<div className={containerClasses}>
			{header && <div className="Card__header">{header}</div>}
			{main && <div className="Card__main">{main}</div>}
			{footer && <div className="Card__footer">{footer}</div>}
		</div>
	);
};

export default Card;
