import React from 'react';
import styled from 'styled-components';
import editIcon from '../../assets/icons/editIcon.svg';


interface Info {
  username: string;
  
}

const UserInfo: React.FC<Info> = ({ username}) => {
  return (
    <>
    <Containerr>

    
    <Title>{username}</Title>
    </Containerr>
    </>
  );
};

export default UserInfo;

const Image = styled.div`
margin-left: 63px;
width: 124px;
height: 124px;
flex-shrink: 0;
border-radius: 40px;
border: 2px solid #FFF;
background: #D9D9D9;
`;
const Icon = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;
const Containerr = styled.div`
position: relative;
display: flex;
align-items: center;
gap: 36px;
width: 100%;
height: 211px;
flex-shrink: 0;
padding-left: 70px;
border-radius: 24px;
background: #F4F3F3;

`;
const Title = styled.div`
color: #000;
font-size: 24px;
font-family:'BPG Nino Mtavruli';

`;