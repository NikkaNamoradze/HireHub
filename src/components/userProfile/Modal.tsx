import React from "react";
import { styled } from "styled-components";

function Modal({
  content,
  title,
  setShowModal,
}: {
  content: JSX.Element;
  title: string | undefined;

  setShowModal: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <>
      <ModalOverlay
        onClick={() => {
          setShowModal(0);
        }}
      >
        {" "}
      </ModalOverlay>
      <Content>
        <ModalContent>
          <ModalHeader>{title} 🌸</ModalHeader>
          {content}
        </ModalContent>
      </Content>
    </>
  );
}

export default Modal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const ModalContent = styled.div`
  background-color: #f6f6f6;

  padding: 34px;
  border-radius: 20px;
  width: 40vw;
`;

const ModalHeader = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;
