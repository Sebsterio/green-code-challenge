import React from "react";
import "./Submit.scss";

const Submit = ({ children }) => {
	return (
		<div className="Submit">
			<input className="Submit__button" type="submit" value={children} />
		</div>
	);
};

export default Submit;
