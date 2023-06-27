
import React from 'react';
import styled from 'styled-components';
import editIcon from '../../assets/icons/editIcon.svg';
import { media } from '../../assets/css/GlobalCss';

interface Info {
  username: string;
}

const UserInfo: React.FC<Info> = ({ username }) => {
  return (
    <>
      <Containerr>

        <Title>{username}</Title>
      </Containerr>
    </>
  );
};

export default UserInfo;


const Containerr = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 36px;
  width: 100%;
  height: 211px;
  flex-shrink: 0;
  padding-left: 60px;
  border-radius: 24px;
  background: #f4f3f3;
`;
const Title = styled.div`
  color: #000;
  font-size: 24px;
  font-family: "BPG Nino Mtavruli";
`;
