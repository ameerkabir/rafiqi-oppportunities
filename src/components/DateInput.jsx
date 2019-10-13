import React from 'react';
import { Input } from '../styles';

const DateInput = ({ onchange, value, name }) => {
  return <Input type="date" onChange={onchange} value={value} name={name} id={name} />;
};
export default DateInput;
