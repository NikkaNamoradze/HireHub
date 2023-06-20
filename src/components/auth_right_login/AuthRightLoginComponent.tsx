import { styled } from "styled-components";
import BackArrow from "../../assets/icons/Back.svg";
import InputComponent from "../Inputs/InputComponent";

function AuthRightLoginComponent() {
  return (
    <>
      <Container>
        <Icon>
          <img src={BackArrow} alt="Back" />
        </Icon>

        <SubContainer>
          <InputComponent label="იმეილი" placeholder="შეიყვანეთ იმეილი" />
          <InputComponent label="პაროლი" placeholder="შეიყვანეთ პაროლი" showPassword={true}/>
          <LoginButton>შესვლა</LoginButton>
        </SubContainer>
      </Container>
    </>
  );
}

export default AuthRightLoginComponent;

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
  gap: 25px;
  width: 80%;
`;

const Icon = styled.div`
  width: 68px;
  height: 20px;
  top: 76px;
  position: absolute;
  left: 58px;
`;

const LoginButton = styled.button`
  background-color: #222222;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 20px;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
`;
