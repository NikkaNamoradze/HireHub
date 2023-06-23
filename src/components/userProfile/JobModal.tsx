import React from 'react';
import styled from 'styled-components';



function JobModal()  {
return (
    <ModalOverlay>
        <ModalContent>
        <ModalHeader>დაამატე სამუშაო გამოცდილება 🌸</ModalHeader>
        <FormContainer>
            <FormField>
            <label>ორგანიზაცია</label>
            <input type="text"  />
            </FormField>
            <FormField>
            <label>თანამდებობა</label>
            <input type="text"  />
            </FormField>
            <FormField>
            <label>მოკლე აღწერა</label>
            <textarea  />
            </FormField>
            <FormField>
            <label>დაწყების თარიღი</label>
            <input type="text" />
            </FormField>
            <FormField>
            <label>დასრულების თარიღი</label>
            <input type="text" />
            </FormField>
            <CloseButton>შენახვა</CloseButton>
        </FormContainer>
        </ModalContent>
    </ModalOverlay>
    );
};

export default JobModal;

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
    background-color:#E4E4E4
  
  }

  textarea {
    padding: 8px;
    border-radius: 18px;
    border: 1px solid #ccc;
    min-height: 100px;
    max-width: 100%; 
    min-width: 100%; 
    background-color:#E4E4E4
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





