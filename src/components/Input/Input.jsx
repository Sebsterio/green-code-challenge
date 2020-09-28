import React from "react";
import "./Input.scss";

const Input = ({ name, type, autoFocus, children, label = children }) => {
	const id = String(Math.random());

	return (
		<div className="Input">
			{label && (
				<label className="Input__label" htmlFor={id}>
					{label}
				</label>
			)}
			<input className="Input__field" {...{ id, name, type, autoFocus }} />
		</div>
	);
};

export default Input;
