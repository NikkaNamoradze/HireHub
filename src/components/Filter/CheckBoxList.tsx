import React from "react";
import CheckboxLabel from "./CheckBoxLabel";
import { styled } from "styled-components";

interface items {
  id: string;
  name: string;
}

function CheckBoxList({
  items,
  setState,
}: {
  items: items[];
  setState: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const handleCheckboxChange = (id: string) => {
    setState((e) => [...e, id]);
  };

  return (
    <CheckboxContainer>
      {items.map((item, index) => (
        <Label key={index}>
          <CheckboxInput type="checkbox" onChange={()=>handleCheckboxChange(item.id)} />
          {item.name}
        </Label>
      ))}
    </CheckboxContainer>
  );
}

export default CheckBoxList;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-top: 15px;
`;

const CheckboxInput = styled.input`
  margin-right: 8px;
  accent-color: #222222;
`;
