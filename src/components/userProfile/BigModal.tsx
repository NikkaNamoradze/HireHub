import React from "react";
import styled from "styled-components";
import Input from "./Input";

function BigModal() {
  return (
    <FormContainer>
      <Input title={'ორგანიზაცია'}/>
      <Input title={'თანამდებობა'}/>
      <Input title={'მოკლე აღწერა'}/>
      <Input title={'დაწყების თარიღი'}/>
      <Input title={'დასრულების თარიღი'}/>

      <CloseButton>შენახვა</CloseButton>
    </FormContainer>
  );
}

export default BigModal;


const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;


const CloseButton = styled.button`
  margin-top: 32px;
  background: #222222;
  color: #ffffff;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 16px 50px;
  gap: 10px;
`;
