import React from "react";
import "./Checkbox.scss";

const Checkbox = ({ children, name }) => {
	const id = String(Math.random());
	return (
		<div className="Checkbox">
			<input
				className="Checkbox__input"
				id={id}
				type="checkbox"
				name={name}
				defaultChecked
			/>
			<label className="Checkbox__label" htmlFor={id}>
				{children}
			</label>
		</div>
	);
};

export default Checkbox;
