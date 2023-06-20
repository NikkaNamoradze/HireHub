import React, { Component } from 'react';
import styled from "styled-components";
import UpperSection from './UpperSection';
import Vigets from './Vigets';
import Switcher from './Switcher';
import Jobdescription from './Jobdescription';


function MainComponent() {

    return (
      <ParentContainer>
        <Container>
          <UpperSection />
          <Vigets />
          <Switcher/>
          <Jobdescription/>
          <Apply>დაკავშირება</Apply>
        </Container>
      </ParentContainer>

    );
  }

export default MainComponent;
const Container = styled.div`
  display:flex;
  flex-direction: column;
  width: 650px;
  height: 778px;
  background: #F4F3F3;
  border-radius: 24px;
`;

const ParentContainer = styled.div`
  display:flex;
  justify-content:center;
`;

const Apply = styled.button`
padding: 18px 256px;
gap: 10px;
background: #222222;
border-radius: 21px;
color: #FFFFFF;
margin: auto;
`;
