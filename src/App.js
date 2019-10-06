import React, { Fragment } from 'react';
import styled from 'styled-components';
import useOpportunities from './CustomeHooks';

const Container = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const FlexItem = styled.div`
  width: 40%;
  margin: 15px 0;
`;
const Header = styled.p`
  display: flex;
  justify-content: center;
  font-size: large;
`;
const Lable = styled.label`
  width: 100%;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
const Button = styled.button`
  background: cyan;
  font-size: 40px;
  border-radius: 10px;
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
const Select = styled.select`
  width: 100%;
  height: 40px;
  margin-top: 10px;
  border-radius: 5px;
  background: white;
`;
const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-top: 10px;
  border-radius: 5px;
`;
const SubmitButton = ({ children }) => {
  return <Button>{children}</Button>;
};

const TextInput = ({ onchange, value, name, placeholder }) => {
  return (
    <Fragment>
      <Input type="text" onChange={onchange} value={value} name={name} placeholder={placeholder} />
    </Fragment>
  );
};
const DateInput = ({ onchange, value, name, labelText }) => {
  return <Input type="date" onChange={onchange} value={value} name={name} />;
};
const SelectInput = ({ options, onchange, name }) => {
  return (
    <Select type="select" name={name} onChange={onchange}>
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

const NumberInput = ({ name, onchange, value }) => {
  return <Input type="number" onChange={onchange} name={name} value={value} />;
};
function App() {
  const saveData = () => {
    try {
      console.log(inputs);
      return inputs;
    } catch (e) {
      console.log(e);
    }
  };

  const { inputs, handleSubmit, handleChange } = useOpportunities(saveData);

  // function handleTextFiled(e) {
  //   handleTextValue(value);
  // }
  // function handleSubmit(e) {
  //   e.preventDefault();
  //
  //   const data = [...value];
  //
  //   console.log(data);
  //   try {
  //     debugger;
  //   } catch (e) {}
  // }
  return (
    <Fragment>
      <Header>data collection</Header>

      <Form onSubmit={handleSubmit}>
        <Container>
          <FlexItem>
            <Lable htmfor="OpportunityProvider"> Opportunity provider</Lable>
            <TextInput onchange={handleChange} name="OpportunityProvider" placeholder="IT" />
          </FlexItem>
          <FlexItem>
            <Lable htmfor="OpportunityCategory">Opportunity category</Lable>
            <SelectInput
              name="OpportunityCategory"
              options={['Select A category', 'job', 'training', 'education', 'mentorship']}
              onchange={handleChange}
            />
          </FlexItem>

          <FlexItem>
            <Lable htmfor="theme">Them</Lable>
            <SelectInput
              name="theme"
              options={[
                'select a theme',
                'business',
                'computer science',
                'software engineering',
                'data science',
                'entrepreneurship',
                'arts',
                'languages',
                'social sciences',
                'manual services (cleaning, culinary)',
              ]}
              onchange={handleChange}
            />
          </FlexItem>
          <FlexItem>
            <Lable htmfor="deliveryMode">Delivery mode</Lable>
            <SelectInput name="deliveryMode" options={['online', 'onside', 'hybrid']} onchange={handleChange} />
          </FlexItem>
          <FlexItem>
            <Lable htmfor="eligibleCountry">Eligible country</Lable>
            <SelectInput
              name="eligibleCountry"
              options={[
                'select an eligible country',
                'Sweden',
                'Germany',
                'UK',
                'France',
                'The Netherlands',
                'Jordan',
                'Spain',
              ]}
              onchange={handleChange}
            />
          </FlexItem>
          <FlexItem>
            <Lable htmfor="durationInMonths">Duration in months</Lable>
            <SelectInput
              name="durationInMonths"
              options={['select a duration', 'less than 3 months', '3-12', 'permanent']}
              onchange={handleChange}
            />
          </FlexItem>
          <FlexItem>
            <Lable htmfor="nextStartDate">Next start date</Lable>
            <DateInput name="nextStartDate" onchange={handleChange} />
          </FlexItem>
          <FlexItem>
            <Lable htmfor="timeCommitmentPerWeek">Time commitment per week(hour per week)</Lable>
            <NumberInput name="timeCommitmentPerWeek" onchange={handleChange} />
          </FlexItem>
          <FlexItem>
            <Lable htmfor="linkORContactToApply"> Link/Contact to apply</Lable>
            <TextInput onchange={handleChange} name={'linkORContactToApply'} />
          </FlexItem>

          <ButtonWrapper>
            <SubmitButton> Submit</SubmitButton>
          </ButtonWrapper>
        </Container>
      </Form>
    </Fragment>
  );
}

export default App;
