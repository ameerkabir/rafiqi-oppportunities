import React from 'react';
import { Select } from '../styles';

const SelectInput = ({ options, onchange, name, required }) => {
  return (
    <Select type="select" name={name} onChange={onchange} id={name} required={required}>
      {options.map(option => {
        return (
          <option key={option} value={option}>
            {option}
          </option>
        );
      })}
    </Select>
  );
};

export default SelectInput;
