import styled from "styled-components";
import BackArrow from "../../assets/icons/Back.svg";
import InputComponent from "../Inputs/InputComponent";

function AuthRightRegisterComponent() {
  return (
    <>
      <Container>
        <Icon>
          <img src={BackArrow} alt="Back" />
        </Icon>

        <SubContainer>
          <InputComponent
            label="სრული სახელი"
            placeholder="შეიყვანეთ შეიყვანეთ სრული სახელი"
          />
          <InputComponent label="იმეილი" placeholder="შეიყვანეთ იმეილი" />
          <InputComponent
            label="პაროლი"
            placeholder="შეიყვანეთ პაროლი"
            showPassword={true}
          />
          <CheckboxContainer>
            <Checkbox type="checkbox" id="termsCheckbox" />
            <CheckboxLabel htmlFor="termsCheckbox">
              ვეთანხმები წესებსა და პირობებს
            </CheckboxLabel>
          </CheckboxContainer>
          <Button>რეგისტრაცია</Button>
        </SubContainer>
      </Container>
    </>
  );
}

export default AuthRightRegisterComponent;

const Container = styled.div`
  width: 60%;
  height: 100%;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 35px;
  width: 80%;
`;

const Icon = styled.div`
  width: 68px;
  height: 20px;
  top: 76px;
  position: absolute;
  left: 58px;
`;

const Button = styled.button`
  height: 48px;
  width: 50%;
  color: white;
  background-color: #222222;
  border: none;
  border-radius: 15px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #696f79;
  justify-content: flex-start;
  width: 100%;
`;

const Checkbox = styled.input`
  appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid #acacac;
  border-radius: 3px;
  cursor: pointer;

  &:checked {
    background-color: #000000;
  }
`;

const CheckboxLabel = styled.label`
  cursor: pointer;
`;
