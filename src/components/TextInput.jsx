import React, { Fragment } from 'react';
import { Input } from '../styles/index';
const TextInput = ({ onchange, value, name, placeholder, required }) => {
  return (
    <Fragment>
      <Input
        id={name}
        type="text"
        onChange={onchange}
        value={value}
        name={name}
        placeholder={placeholder}
        required={required}
      />
    </Fragment>
  );
};
export default TextInput;
