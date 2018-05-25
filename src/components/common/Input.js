import React from 'react';

export const Input = (props) => (
	<div className="formElement">
		<label
      className="formInput"
      htmlFor={props.htmlFor}
    >
      {props.title}
    </label>

		<input
			className="form-input"
			name={props.name}
			type={props.inputType}
			value={props.value}
			onChange={props.onChange}
			placeholder={props.placeholder}
      required
      />
	</div>
);
