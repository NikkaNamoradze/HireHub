import { styled } from "styled-components";
import BackArrow from "../../assets/icons/Back.svg";
import InputComponent from "../Inputs/InputComponent";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase/config";

import { useDispatch } from 'react-redux';
import { login } from '../../store/userSlice';
import { media } from "../../assets/css/GlobalCss";

function AuthRightLoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const onLogin = () => {
    if (email.trim() === "" || password.trim() === "") {
      return;
    }

    if (password.length < 8) {
      return;
    }

    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(login(user.uid));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <>
      <Container>
        <Link to={"/"}>
          <Icon>
            <img src={BackArrow} alt="Back" />
          </Icon>
        </Link>

        <SubContainer>
          <InputComponent
            label="იმეილი"
            placeholder="შეიყვანეთ იმეილი"
            setValue={setEmail}
            value={email}
          />
          <InputComponent
            label="პაროლი"
            placeholder="შეიყვანეთ პაროლი"
            showPassword={true}
            setValue={setPassword}
            value={password}
          />
          <LoginButton onClick={onLogin}>შესვლა</LoginButton>
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

  ${media.phone(`
      position: unset;
    `)}
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 25px;
  width: 80%;

  ${media.phone(`
      margin-top: 50px;
    `)}
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
