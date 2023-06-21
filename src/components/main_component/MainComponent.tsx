import React, { Component } from 'react';
import styled from "styled-components";
import UpperSection from './UpperSection';
import Vigets from './Vigets';
import Switcher from './Switcher';
import Jobdescription from './Jobdescription';


function MainComponent() {

    return (
      <Container>

        <Content>
          <UpperSection />
          <Vigets />
          <Switcher/>
          <Jobdescription/>
          <Apply>დაკავშირება</Apply>
        </Content>
      </Container>


    );
  }

export default MainComponent;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 720px;
    height: calc( 90vh );
    gap: 23px;

    background: #F4F3F3;
    border-radius: 24px;
    padding: 23px;
  
`;
const Content =  styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    gap: 23px;
`


const Apply = styled.button`
padding: 18px 256px;
gap: 10px;
background: #222222;
border-radius: 21px;
color: #FFFFFF;
margin: auto;
`;
