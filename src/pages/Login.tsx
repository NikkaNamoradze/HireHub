import { styled } from "styled-components";
import AuthLeftComponent from "../components/auth_left/AuthLeftComponent";
import AuthRightLoginComponent from "../components/auth_right_login/AuthRightLoginComponent";

function Login() {
  return (
    <>
      <Container>
        <AuthLeftComponent />
        <AuthRightLoginComponent/>
      </Container>
    </>
  );
}

export default Login;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;