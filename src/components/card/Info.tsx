import React from 'react';
import styled from 'styled-components';

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row; 
  /* justify-content: space-between; */
  width: 100%;
`;

const InfoBox = styled.div`
  padding: 8px 27px;
  background-color: #f0f0f0;
  height: 29px;
  border-radius: 30px;
  background-color: #FFFFFF;
`;

const InfoText = styled.div`
  font-size: 11px;
  display: flex;
  justify-content: center;
  font-weight: bold;
  color: #222222;
`;

function Info() {
  return (
    <div>
    <InfoContainer>
      <InfoBox>
        <InfoText>$ 10/Hour</InfoText>
      </InfoBox>
      <InfoBox>
        <InfoText>Part-Time</InfoText>
      </InfoBox>
      <InfoBox>
        <InfoText>Expert</InfoText>
      </InfoBox>
    </InfoContainer>
    </div>
  );
}

export default Info;

