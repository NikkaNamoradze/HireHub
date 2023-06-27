import React from "react";
import styled from "styled-components";
import Delete from "../../assets/icons/delete.svg";

interface Item {
  title: string;
  onClick?: () => void;
}

const Skill: React.FC<Item> = ({ title, onClick }) => {
  return (
    <>
      <Skills>
        <Icon onClick={onClick}>
          <img src={Delete} alt="Delete" />
        </Icon>
        <Title>{title}</Title>
      </Skills>
    </>
  );
};

export default Skill;

const Title = styled.p`
  color: #000;
  font-size: 16px;
  font-family: "BPG Nino Mtavruli";
`;

const Icon = styled.div`
  position: absolute;
  top: 7px;
  right: 8px;
`;

const Skills = styled.div`
  position: relative;
  display: inline-flex;
  padding: 13px 52px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 16px;
  background: #d9d9d9;
`;