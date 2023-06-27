import React from "react";
import { styled } from "styled-components";
import MiniBox from "./MiniBox";
import add from "../../assets/icons/add.svg";
import { ProfileSecondItemInterface } from "../../types";
import { media } from "../../assets/css/GlobalCss";

function SeconItem({
  title,
  data,
  setShowModal,
  setModalTitle,
}: {
  title: string;
  data: ProfileSecondItemInterface[];
  setShowModal: React.Dispatch<React.SetStateAction<number>>;
  setModalTitle: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {


  return (
    <Container>
      <Icon
        onClick={() => {
          setShowModal(title === "უნარები" ? 3 : 4);
          setModalTitle("დაამატე " + title);
        }}
      >
        <img src={add} alt="editIcon" />
      </Icon>
      <h3>{title}</h3>
      <C>
        {data.map((item, index) => {
          return <MiniBox key={index} title={item.title} />;
        })}
      </C>
    </Container>
  );
}

export default SeconItem;

const Icon = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const C = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 39px;
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
    color: #acacac;
    font-size: 24px;
    font-family: "BPG Nino Mtavruli";
    font-weight: normal;
    font-weight: "400";
    word-wrap: "break-word";
    align-self: flex-start;

    ${media.phone(`
      font-size: 22px;

          `)}
  }
`;