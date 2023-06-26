import React from 'react'
import { styled } from 'styled-components';

function Input({title}: {title:string}) {
  return (
    <FormField>
        <label>{title}</label>
        <input type="text" />
      </FormField>
  )
}

export default Input

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