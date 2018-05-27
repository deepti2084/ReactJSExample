import React from 'react';

export const SelectInput = (props) => (
	<div className="formElement">
		<label
      className="formInput"
    >
      {props.title}
    </label>

    <select
    className="form-input"
    onChange={props.onChange}
    placeholder={props.placeholder}
    required
    >
      <option value="Active">Active</option>
      <option value="Inactive">Inactive</option>
    </select>
	</div>
);
