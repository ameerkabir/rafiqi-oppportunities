import React, { Fragment } from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';
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
  font-weight: bold;
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
      <Input
        id={name}
        value={value}
        type="text"
        onChange={onchange}
        value={value}
        name={name}
        placeholder={placeholder}
      />
    </Fragment>
  );
};
const DateInput = ({ onchange, value, name }) => {
  return <Input type="date" onChange={onchange} value={value} name={name} id={name} />;
};
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

const NumberInput = ({ name, onchange, value }) => {
  return <Input type="number" onChange={onchange} name={name} value={value} />;
};
function App() {
  const saveData = () => {
    try {
      return axios.post(`http://localhost:4000/staging`, inputs);
    } catch (e) {
      console.log(e);
    }
  };

  const { inputs, handleSubmit, handleChange } = useOpportunities(saveData);
  return (
    <Fragment>
      <Header>Partners Registration</Header>

      <Form onSubmit={handleSubmit}>
        <Container>
          <FlexItem>
            <Lable htmlFor="OpportunityProvider"> Opportunity provider</Lable>
            <TextInput onchange={handleChange} name="OpportunityProvider" placeholder="IT" />
          </FlexItem>
          <FlexItem>
            <Lable htmlFor="OpportunityCategory">Opportunity category</Lable>
            <SelectInput
              name="OpportunityCategory"
              options={['Select A category', 'Job', 'Training', 'University Degree', 'Certified Training']}
              onchange={handleChange}
            />
          </FlexItem>

          <FlexItem>
            <Lable htmlFor="theme">Theme</Lable>
            <SelectInput
              name="theme"
              options={[
                'select a theme',
                'IT support and Networking',
                'Web Mobile Software Development',
                'Data Analytics',
                'Artificial Intelligence',
                'Healthcare Professional',
                'None IT Engineer',
                'Skilled Trades(houseKeeper, plummer, electrician, agriculture)',
                'Teaching',
                'Digital Marketing',
                'Sales Customer Service',
                'Artist & Creative Vocations(painter, poet)',
                'Content Manger(Writer, translator, content creator)',
                'Legal',
                'Political & Social Science',
                'Social Worker',
                'Accounting And Finance',
                'Business And Management',
                'Scientific Research',
                'Research Others',
                'Others',
              ]}
              onchange={handleChange}
            />
          </FlexItem>
          <FlexItem>
            <Lable htmlFor="deliveryMode">Delivery mode</Lable>
            <SelectInput name="deliveryMode" options={['online', 'onside', 'hybrid']} onchange={handleChange} />
          </FlexItem>
          <FlexItem>
            <Lable htmlFor="eligibleCountry">Eligible country</Lable>
            <SelectInput
              name="eligibleCountry"
              options={[
                'select an eligible country',
                'Sweden',
                'Germany',
                'UK',
                'France',
                'Netherlands',
                'Jordan',
                'Spain',
              ]}
              onchange={handleChange}
            />
          </FlexItem>

          <FlexItem>
            <Lable htmlFor="city"> City (optional)</Lable>
            <TextInput onchange={handleChange} name="city" placeholder="London" />
          </FlexItem>
          <FlexItem>
            <Lable htmlFor="durationInMonths">Duration in months</Lable>
            <SelectInput
              name="durationInMonths"
              options={['select a duration', 'less than 3 months', '3-12', 'permanent']}
              onchange={handleChange}
            />
          </FlexItem>
          <FlexItem>
            <Lable
              className={'longtext'}
              htmlFor="nextStartDate"
              css={css`
                padding-bottom: 200px;
              `}
            >
              Next start date (if this is an ongoing opportunity, please do not select a date)
            </Lable>
            <DateInput name="nextStartDate" onchange={handleChange} />
          </FlexItem>
          <FlexItem>
            <Lable htmlFor="timeCommitmentPerWeek">Time commitment per week(hour per week)</Lable>
            <SelectInput
              name="timeCommitmentPerWeek"
              options={['select a time', 'full time', 'part time']}
              onchange={handleChange}
            />
          </FlexItem>
          <FlexItem>
            <Lable htmlFor="linkORContactToApply"> Link/Contact to apply</Lable>
            <TextInput onchange={handleChange} name={'linkORContactToApply'} />
          </FlexItem>

          <FlexItem>
            <Lable htmlFor="candidateReadiness">candidate readiness </Lable>
            <SelectInput
              name="candidateReadiness"
              options={[
                'select the candidate readiness',
                'beginner (no prior domain knowledge required)',
                'medium (some domain knowledge is required)',
                'advanced (solid domain knowledge required)',
              ]}
              onchange={handleChange}
            />
          </FlexItem>
          <FlexItem>
            <Lable htmlFor="en_requirements"> English requirements (1: no english, 10: fluent)</Lable>
            <SelectInput
              onchange={handleChange}
              name={'en_requirements'}
              options={['select english requirements', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
            />
          </FlexItem>
          <FlexItem>
            <Lable htmlFor="local_lan_requirements"> Local language requirements (1: no, 10: fluent)</Lable>
            <SelectInput
              onchange={handleChange}
              name={'local_lan_requirements'}
              options={['select the local language requirements', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
            />
          </FlexItem>
          <FlexItem>
            <Lable htmlFor="comments">comments (optional)</Lable>
            <TextInput onchange={handleChange} name={'comments'} />
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
