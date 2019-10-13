import { useState } from 'react';
const useOpportunities = callback => {
  const [inputs, setInputs] = useState({});
  const handleSubmit = e => {
    e.preventDefault();
    callback();
  };
  const handleChange = e => {
    e.persist();
    setInputs(inputs => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
  };
  return {
    handleSubmit,
    handleChange,
    inputs,
  };
};
export default useOpportunities;
