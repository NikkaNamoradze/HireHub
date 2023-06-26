import React from 'react';
import styled from 'styled-components';
import BookmarkIcon from '../../assets/icons/Bookmark.svg';
import { IMAGE_URL } from '../../api/apiConfig';

const UpperSection = ({image,company,position, location}:{image:string, company:string,position:string, location:string}) => {
  return (
    <Container>  
    <Div>
        <Logo src={IMAGE_URL(image)} alt="" />
      <SuperDiv>
        <Company>{company}</Company>
        <Position>{position}</Position>
        <Location>{location}</Location>
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
  font-weight: 700;
  font-size: 22px;
  line-height: 17px;
`;

const Logo = styled.img`
  width: 81px;
  height: 81px;
  background: #2a9df4;
  border-radius: 25px;
  object-fit: cover;
`;

const Location = styled.p`
  font-family: 'Urbanist';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #acacac;
`;

const Icon = styled.div``;
