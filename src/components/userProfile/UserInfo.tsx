import React from "react";
import styled from "styled-components";
import editIcon from "../../assets/icons/editIcon.svg";

interface Info {
  username: string;
}

const UserInfo: React.FC<Info> = ({ username }) => {
  return (
    <>
      <Containerr>
        <Icon>
          <img src={editIcon} alt="editIcon" />
        </Icon>

        <Image />
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
  border: 2px solid #fff;
  background: #d9d9d9;
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

  border-radius: 24px;
  background: #f4f3f3;
`;
const Title = styled.div`
  color: #000;
  font-size: 24px;
  font-family: "BPG Nino Mtavruli";
`;
