import React from 'react';
import styled, { keyframes } from 'styled-components';


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;



const Spinner = styled.div`
  border: 4px solid #f3f3f3; 
  border-top: 4px solid #222222; 
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${rotate} 1s linear infinite; 
`;

const Spiner = () => {
  return (

      <Spinner />

  );
};

export default Spiner;
