import React from "react";
import { styled } from "styled-components";

type Inputs = {
  label?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
};

const Input = ({ label, setValue, value }: Inputs) => {
  return (
    <FormField>
      <label>{label}</label>
      <input type="text" value={value} onChange={(event)=> setValue(event.target.value)}/>
    </FormField>
  );
};

export default Input;

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
    background-color: #e4e4e4;
  }

  textarea {
    padding: 8px;
    border-radius: 18px;
    border: 1px solid #ccc;
    min-height: 100px;
    max-width: 100%;
    min-width: 100%;
    background-color: #e4e4e4;
  }
`;
