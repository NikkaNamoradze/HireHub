import { styled } from "styled-components";
import AuthLeftComponent from "../components/auth_left/AuthLeftComponent";
import AuthRightLoginComponent from "../components/auth_right_login/AuthRightLoginComponent";
import { media } from "../assets/css/GlobalCss";

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

  ${media.phone(`
      justify-content:center;
  
    `)}
`;