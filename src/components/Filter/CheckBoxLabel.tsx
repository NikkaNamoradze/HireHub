
import styled from "styled-components";

interface CheckboxLabelProps {
  children: string;
}

const CheckboxLabel = ({ children }: CheckboxLabelProps) => {
  return (
    <Label>
      <CheckboxInput type="checkbox" />
      {children}
    </Label>
  );
};

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



export default CheckboxLabel;

