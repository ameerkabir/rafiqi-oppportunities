import React, { Fragment } from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';
import useOpportunities from './CustomeHooks';
import { Label, Form } from './styles/index';
import TextInput from './components/TextInput';
import SelectInput from './components/SelectInput';
import SubmitButton from './components/SubmitButton';
import DateInput from './components/DateInput';

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

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
const Overflow = styled.div`
  white-space: nowrap;
  overflow: auto;
`;

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
            <Label htmlFor="OpportunityProvider"> Opportunity provider</Label>
            <TextInput onchange={handleChange} name="OpportunityProvider" placeholder="IT" />
          </FlexItem>
          <FlexItem>
            <Label htmlFor="OpportunityCategory">Opportunity category</Label>
            <SelectInput
              name="OpportunityCategory"
              options={['Select A category', 'Job', 'Training', 'University Degree', 'Certified Training']}
              onchange={handleChange}
            />
          </FlexItem>

          <FlexItem>
            <Label htmlFor="theme">Theme</Label>
            <SelectInput
              name="theme"
              options={[
                'select a theme',
                'entrepreneurship and incubation',
                'IT support and Networking',
                'Web/Mobile/Software development',
                'Data Analytics',
                'Artificial Intelligence',
                'Healthcare Professional',
                'None IT Engineer',
                'Skilled Trades(houseKeeper, plummer, electrician, agriculture)',
                'Teaching',
                'Digital Marketing',
                'Sales Customer Service',
                'Artist & Creative Vocations(painter, poet)',
                'Content Manager(Writer, translator, content creator)',
                'Legal',
                'Political & Social Science',
                'Social Worker',
                'Accounting And Finance',
                'Business And Management',
                'Scientific Research',
                'Other Research',
                'Others',
              ]}
              onchange={handleChange}
            />
          </FlexItem>
          <FlexItem>
            <Label htmlFor="deliveryMode">Delivery mode</Label>
            <SelectInput name="deliveryMode" options={['online', 'onsite', 'hybrid']} onchange={handleChange} />
          </FlexItem>
          <FlexItem>
            <Label htmlFor="eligibleCountry">Opportunity country</Label>
            <SelectInput
              name="OpportunityCountry"
              options={[
                'select Opportunity country',
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
            <Label htmlFor="city"> City (optional)</Label>
            <TextInput onchange={handleChange} name="city" placeholder="London" />
          </FlexItem>
          <FlexItem>
            <Label htmlFor="durationInMonths">Duration in months</Label>
            <SelectInput
              name="durationInMonths"
              options={['select a duration', 'less than 3 months', '3-12', 'permanent']}
              onchange={handleChange}
            />
          </FlexItem>
          <FlexItem>
            <Label
              className={'longtext'}
              htmlFor="nextStartDate"
              css={css`
                padding-bottom: 200px;
              `}
            >
              <Overflow> Next start date (if this is an ongoing opportunity, please do not select a date)</Overflow>
            </Label>
            <DateInput name="nextStartDate" onchange={handleChange} />
          </FlexItem>
          <FlexItem>
            <Label htmlFor="timeCommitmentPerWeek">Time commitment per week</Label>
            <SelectInput
              name="timeCommitmentPerWeek"
              options={['select a time', 'Full-time (30+ hours per week)', 'Part-time (< 30 hours per week)']}
              onchange={handleChange}
            />
          </FlexItem>
          <FlexItem>
            <Label htmlFor="linkORContactToApply"> Link/Contact to apply</Label>
            <TextInput onchange={handleChange} name={'linkORContactToApply'} />
          </FlexItem>

          <FlexItem>
            <Label htmlFor="candidateReadiness">Expected candidate readiness </Label>
            <SelectInput
              name="candidateReadiness"
              options={[
                'select the candidate readiness',
                'low: candidate does not require much knowledge in the field',
                'medium: candidate should have some related work or education background',
                'high: candidate should be a domain-expert',
              ]}
              onchange={handleChange}
            />
          </FlexItem>
          <FlexItem>
            <Label htmlFor="en_requirements"> English requirements (1: no english, 10: fluent)</Label>
            <SelectInput
              onchange={handleChange}
              name={'en_requirements'}
              options={['select english requirements', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
            />
          </FlexItem>
          <FlexItem>
            <Label htmlFor="local_lan_requirements">
              {' '}
              Local language requirements (1: no local language knowledge, 10: fluent)
            </Label>
            <SelectInput
              onchange={handleChange}
              name={'local_lan_requirements'}
              options={['select the local language requirements', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
            />
          </FlexItem>
          <FlexItem>
            <Label htmlFor="comments">comments (optional)</Label>
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
