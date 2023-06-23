import React from 'react';
import styled from 'styled-components';
import Delete from '../../assets/icons/delete.svg';
import Skill from './Skill';



function MiniModal()  {
return (
    <ModalOverlay>
        <ModalContent>
        <ModalHeader>დაამატე უნარი 🌸</ModalHeader>
        <FormContainer>
            <Mamamtavari>
            <Skill title='ჭრა'/>
            <Skill title='კერვა'/>
            <Skill title='ცეკვა'/>
            </Mamamtavari>

            <FormField>
            <label>უნარი</label>
            <input type="text"  />
            </FormField>
            <CloseButton>შენახვა</CloseButton>
        </FormContainer>
        </ModalContent>
    </ModalOverlay>
    );
};

export default MiniModal;



const Mamamtavari = styled.div`
display: flex;
gap: 10px;
flex-wrap: wrap;
padding: 10px;
margin-bottom: 20px;
`;



const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
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

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  label {
    font-weight: bold;
    margin-bottom: 4px;
  }

  input {
    padding: 14px;
    border-radius: 18px;
    border: 1px solid #ccc;
    background-color:#E4E4E4;
    outline :solid #222222
  
  }
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





