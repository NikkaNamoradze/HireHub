import React from 'react';
import styled from 'styled-components';
import editIcon from '../../assets/icons/editIcon.svg';


interface SectionProps {
  jobTitle: string;
  position: string;
  content: string;
  startDate: string;
  endDate: string;

}

const Section: React.FC<SectionProps> = ({ jobTitle, position, content, startDate, endDate }) => {
  return (
    <Container>
    <Icon>
        <img src={editIcon} alt="editIcon" />
    </Icon> 
      <div>
      <Date>{startDate}</Date>
      <Date>{endDate}</Date>
      </div>
      
      <CBox>
      <JTitle>{jobTitle} | <span>{position}</span></JTitle>
      <Content>{content}</Content>
      </CBox>
    </Container>
  );
};

export default Section;

const Icon = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const CBox = styled.div`
display:flex;
gap:23px;
flex-direction: column;
`;

const JTitle = styled.div`
color: #222222;
font-Size: 24;
font-Family: 'BPG Nino Mtavruli';
font-Weight: 400;
word-Wrap: break-word
span {
    color: #828282;
    font-size: 24px;
    font-family: 'BPG Nino Mtavruli';
    font-weight: 400;
    word-wrap: break-word;
  }
`;
const Date = styled.p`
  color: #828282;
  font-size: 19px;
  font-Family: 'BPG Nino Mtavruli';
  font-Weight: 400;
  word-Wrap: break-word;
`;
const Content = styled.div`
color: #828282;
font-size: 16px;
font-family: 'BPG Nino Mtavruli';
`;

const Container = styled.div`
position: relative;
display: flex;
padding: 26px;
width: 100%;
height: 125px;
flex-shrink: 0;
border-radius: 23px;
background: #D9D9D9;
gap: 59px;
`;
