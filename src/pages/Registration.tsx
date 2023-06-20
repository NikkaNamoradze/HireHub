import { styled } from "styled-components";
import AuthLeftComponent from "../components/auth_left/AuthLeftComponent";
import AuthRightRegisterComponent from "../components/auth_right_registration/AuthRightRegisterComponent";

function Login() {
  return (
    <>
      <Container>
        <AuthLeftComponent />
        <AuthRightRegisterComponent />
      </Container>
    </>
  );
}

export default Login;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
