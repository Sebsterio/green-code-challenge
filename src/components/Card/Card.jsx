import React from "react";
import "./Card.scss";

const Card = ({ header, main, footer }) => {
	return (
		<div className="Card">
			{header && <div className="Card__header">{header}</div>}
			{main && <div className="Card__main">{main}</div>}
			{footer && <div className="Card__footer">{footer}</div>}
		</div>
	);
};

export default Card;
