import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import MiniBox from './MiniBox';
import UserInfo from './UserInfo';
import add from '../../assets/icons/add.svg';
import JobModal from './JobModal';
import MiniModal from './MiniModal';


function UserPage() {

  return (
    <Master>
    <MainC>
      <UserInfo username='irinka'/>
      <Container>
      <Icon>
          <img src={add} alt="editIcon" />
      </Icon> 
        <h3>სამუშაო გამოცდილება</h3>
        <Section
          jobTitle="ალგორითმიკა"
          position="მასწავლებელი"
          content="რამე მოკლე აღწერა"
          startDate="2023-იან"
          endDate='2023-აგვ'
        />
        <Section
          jobTitle="ალგორითმიკა"
          position="მასწავლებელი"
          content="რამე მოკლე აღწერა"
          startDate="2023-იან"
          endDate='2023-აგვ'
        />
      </Container>
      
      <Container>
      <Icon>
        <img src={add} alt="editIcon" />
      </Icon> 
        <h3>განათლება</h3>
        <Section
          jobTitle="ალგორითმიკა"
          position="მასწავლებელი"
          content="რამე მოკლე აღწერა"
          startDate="2023-იან"
          endDate='2023-აგვ'
        />
      </Container>

      <Container>
      <Icon>
        <img src={add} alt="editIcon" />
      </Icon> 
        <h3>უნარები</h3>
        <C>
        <MiniBox title="irinka" />
        </C>
      </Container>

      <Container>
      <Icon>
        <img src={add} alt="editIcon" />
      </Icon> 
      <h3>ენები</h3>
        <C>
        <MiniBox title="English" />
        <MiniBox title="Italian" />
        </C>
      </Container>
    </MainC>
    <JobModal/>
    <MiniModal/>
    </Master>
    
  );
}

const Master = styled.div`
  margin: auto;
  display: flex;
  width: 80vw;
  padding-top: 73px;

`;


const Icon = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;

`;

const C = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 39px;
`;

const MainC = styled.div`

  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 32px;
`;

const Container = styled.div`
position: relative;
  width: 100%;
  flex-shrink: 0;
  border-radius: 24px;
  background: #f4f3f3;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 25px;
  padding: 20px 63px 48px 63px;
  /* margin-bottom: 32px; */

  h3 {
    display: flex;
    color: #ACACAC;
  font-size: 24px;
  font-family: 'BPG Nino Mtavruli';
  font-weight: normal;
  font-Weight: '400';
  word-Wrap: 'break-word';
  align-self: flex-start;
  }
`;

export default UserPage;


