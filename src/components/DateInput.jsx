import React from 'react';
import propTypes from 'prop-types';
import { Input } from '../styles';

const DateInput = ({ onchange, value, name }) => {
  return <Input type="date" onChange={onchange} value={value} name={name} id={name} />;
};

DateInput.propTypes = {
  onchange: propTypes.func.isRequired,
  value: propTypes.string,
  name: propTypes.string.isRequired,
};
export default DateInput;
