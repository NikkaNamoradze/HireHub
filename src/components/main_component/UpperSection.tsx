import React from 'react';
import styled from 'styled-components';
import BookmarkIcon from '../../assets/icons/Bookmark.svg';

const UpperSection = () => {
  return (
    <Container>  
    <Div>
        <Logo />
      <SuperDiv>
        <Company>Hatypo Studio</Company>
        <Position>Ui Designer</Position>
        <Description>Suracarta ID - onsite</Description>
      </SuperDiv>
    </Div>
    
      <Icon>
        <img src={BookmarkIcon} alt="Bookmark" />
      </Icon>
    </Container>
  );
};

export default UpperSection;

const SuperDiv = styled.div`
    display:flex;
    flex-direction: column;
    gap: 6px;

`;

const Div = styled.div`
    display:flex;
    flex-direction: row;
    gap:15px;
`;

const Company = styled.h1`
  font-family: 'Urbanist';
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 23px;
`;

const Container = styled.div`
    
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 15px;

`;

const Position = styled.p`
  font-family: 'Urbanist';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
`;

const Logo = styled.div`
  width: 81px;
  height: 81px;
  background: #2a9df4;
  border-radius: 25px;
`;

const Description = styled.p`
  font-family: 'Urbanist';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #acacac;
`;

const Icon = styled.div``;
