import React from "react";
import styled from "styled-components";
import Delete from "../../assets/icons/delete.svg";

interface SectionProps {
  id: string;
  title: string;
  position: string;
  content?: string;
  startDate: string;
  endDate: string;
  onClick: (id:string) => void;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  position,
  content,
  startDate,
  endDate,
  onClick
}) => {

  return (
    <Container>
      <Icon onClick={()=> onClick(id)}>
        <img width={27} height={27} src={Delete} alt="DeleteIcon" />
      </Icon>
      <div>
        <Date>{startDate}</Date>
        <Date>{endDate}</Date>
      </div>

      <CBox>
        <JTitle>
          {title} | <span>{position}</span>
        </JTitle>
        <Content>{content}</Content>
      </CBox>
    </Container>
  );
};

export default Section;

const Icon = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

const CBox = styled.div`
  display: flex;
  gap: 23px;
  flex-direction: column;
`;

const JTitle = styled.div`
  color: #222222;
  font-size: 24;
  font-family: "BPG Nino Mtavruli";
  font-weight: 400;
  word-wrap: break-word span {
    color: #828282;
    font-size: 24px;
    font-family: "BPG Nino Mtavruli";
    font-weight: 400;
    word-wrap: break-word;
  }
`;
const Date = styled.p`
  color: #828282;
  font-size: 19px;
  font-family: "BPG Nino Mtavruli";
  font-weight: 400;
  word-wrap: break-word;
`;
const Content = styled.div`
  color: #828282;
  font-size: 16px;
  font-family: "BPG Nino Mtavruli";
`;

const Container = styled.div`
  position: relative;
  display: flex;
  padding: 26px;
  width: 100%;
  flex-shrink: 0;
  border-radius: 23px;
  background: #d9d9d9;
  gap: 59px;
`;