import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { useState } from "react";
import styled from "styled-components";
import BackArrow from "../../assets/icons/Back.svg";
import InputComponent from "../Inputs/InputComponent";

function AuthRightRegisterComponent() {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const handleCheckboxChange = () => {
    setCheckboxChecked(!checkboxChecked);
  };

  const handleRegistration = () => {
    if (nickname.trim() === "") {
      console.log("შეიყვანეთ სრული სახელი");
      return;
    }

    if (password.trim() === "") {
      console.log("პაროლის შეყვანა აუცილებელია");
      return;
    }

    if (password.length < 8) {
      console.log("პაროლი უნდა იყოს 7 სიმბოლოზე მეტი");
      return;
    }

    if (!checkboxChecked) {
      console.log("დაეთანხმეთ წესებსა და პირობებს");
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.uid);

        const db = getDatabase();
        set(ref(db, "users/" + user.uid), {
          email:email,
          password:password,
          nickname:nickname
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

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
            value={nickname}
            setValue={setNickname}
          />
          <InputComponent
            label="იმეილი"
            placeholder="შეიყვანეთ იმეილი"
            value={email}
            setValue={setEmail}
          />
          <InputComponent
            label="პაროლი"
            placeholder="შეიყვანეთ პაროლი"
            value={password}
            setValue={setPassword}
            showPassword={true}
          />
          <CheckboxContainer>
            <Checkbox
              type="checkbox"
              id="termsCheckbox"
              checked={checkboxChecked}
              onChange={handleCheckboxChange}
            />
            <CheckboxLabel htmlFor="termsCheckbox">
              ვეთანხმები წესებსა და პირობებს
            </CheckboxLabel>
          </CheckboxContainer>
          <Button onClick={handleRegistration}>რეგისტრაცია</Button>
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
  background-color: ${(props) => (props.disabled ? "#acacac" : "#222222")};
  border: none;
  border-radius: 15px;
  font-size: 16px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
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
