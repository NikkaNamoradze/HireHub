import { useState } from "react";
import styled from "styled-components";

type Inputs = {
  label?: string;
  placeholder?: string;
  showPassword?: boolean;
};

const InputComponent = ({ label, placeholder, showPassword }: Inputs) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  return (
    <Wrapper>
      <Label>{label}:</Label>
      <InputWrapper>
        <Input
          type={showPassword && passwordVisible ? "password" : "text"}
          placeholder={placeholder}
        />
        {showPassword && (
          <TogglePasswordButton onClick={togglePasswordVisibility}>
            {passwordVisible ? "Show" : "Hide"}
          </TogglePasswordButton>
        )}
      </InputWrapper>
    </Wrapper>
  );
};

export default InputComponent;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: #696f79;
  margin-bottom: 5px;
  font-size: 14px;
  margin-bottom: 10px;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  height: 64px;
  width: 100%;
  padding: 8px;
  font-size: 13px;
  border: 1px solid #acacac;
  border-radius: 15px;
`;

const TogglePasswordButton = styled.button`
  position: absolute;
  right: 10px;
  font-size: 16px;
  color: #696f79;
  cursor: pointer;
`;
