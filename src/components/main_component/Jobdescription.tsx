import React, { Component } from 'react'
import { styled } from 'styled-components'

export class Jobdescription extends Component {
  render() {
    return (
        <MotherDiv>
            <Desc>
            Job Description
            </Desc>
            <Desc2>
            Collaborate with the Digital Marketing team to propose, design, & deliver wireframes, user journeys, and UI mock-ups.
            Collaborate with the SEO & Content team to establish best practices for high-performing websites..
            Collaborate with Front-End Developers to ensure high quality & bug-free deliverables.
            Develop high-fidelity UI prototypes for responsive websites & maintain consistency of our design system.
            </Desc2>
        </MotherDiv>
      
      
    )
  }
}

export default Jobdescription


const MotherDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 35px;
    gap: 11px;

`;


const Desc = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 24px;

color: #222222;

`;

const Desc2 = styled.div`
display: flex;
justify-content: center;
font-family: 'Urbanist';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;

color: #ACACAC;

`;