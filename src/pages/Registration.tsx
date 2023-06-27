import { styled } from "styled-components";
import AuthLeftComponent from "../components/auth_left/AuthLeftComponent";
import AuthRightRegisterComponent from "../components/auth_right_registration/AuthRightRegisterComponent";
import { media } from "../assets/css/GlobalCss";

function Registration() {
  return (
    <>
      <Container>
        <AuthLeftComponent />
        <AuthRightRegisterComponent />
      </Container>
    </>
  );
}

export default Registration;

const Container = styled.div`
  display: flex;
  flex-direction: row;

  ${media.phone(`
      justify-content:center;
  
    `)}
`;