import React from 'react';
import { Select } from '../styles';

const SelectInput = ({ options, onchange, name }) => {
  return (
    <Select type="select" name={name} onChange={onchange} id={name}>
      {options.map(option => {
        return (
          <option key={option} value={option.value}>
            {option}
          </option>
        );
      })}
    </Select>
  );
};

export default SelectInput;
