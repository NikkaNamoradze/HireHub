import React from "react";
import { styled } from "styled-components";
import Section from "./Section";
import add from "../../assets/icons/add.svg";
import { ProfileItemInterface } from "../../types";

function Item({
  data,
  title,
  setShowModal,
  setModalTitle,
}: {
  data: ProfileItemInterface[];
  title: string;
  setShowModal: React.Dispatch<React.SetStateAction<number>>;
  setModalTitle: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
  return (
    <Container>
      <Icon
        onClick={() => {
          setShowModal(1);
          setModalTitle('დაამატე '+title);
        }}
      >
        <img src={add} alt="editIcon" />
      </Icon>
      <h3>{title}</h3>
      {data?.map((item: ProfileItemInterface, index) => {
        const { title, position, content, startDate, endDate } = item;

        return (
          <Section
            setShowModal={setShowModal}
            setModalTitle={setModalTitle}
            key={index}
            title={title}
            position={position}
            content={content}
            startDate={startDate}
            endDate={endDate}
          />
        );
      })}
    </Container>
  );
}

export default Item;

const Icon = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
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
  }
`;
