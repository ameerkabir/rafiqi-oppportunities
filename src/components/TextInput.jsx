import React, { Fragment } from 'react';
import { Input } from '../styles/index';
const TextInput = ({ onchange, value, name, placeholder }) => {
  return (
    <Fragment>
      <Input id={name} type="text" onChange={onchange} value={value} name={name} placeholder={placeholder} />
    </Fragment>
  );
};
export default TextInput;
