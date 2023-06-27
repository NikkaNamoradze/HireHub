import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { styled } from "styled-components";
import { media } from "../../../src/assets/css/GlobalCss";
import profile from "../../assets/icons/navigationIcon/Profile.svg";

function HeaderProfile() {

  const uid = Cookies.get("uid");


  const location = useLocation();
  const endpoint = location.pathname;
  const [focused, setFocused] = useState<string>("");
  useEffect(() => {
    setFocused(endpoint);
  }, [endpoint]);
  if (uid) {
    return (
      <Container>
        <Icon focused={focused === '/profile'} content={"Profile"}>
          <img src={profile} alt="" />
        </Icon>
      </Container>
    );
  }

  return (
    <Container>
      <Link to={"/login"}>
        <LoginButton>Login</LoginButton>
      </Link>
      <Link to={"/registration"}>
        <SignUpButton>Sign Up</SignUpButton>
      </Link>
    </Container>
  );
}

export default HeaderProfile;



const Container = styled.div`
  border-left: 2px solid #f4f3f3;
  padding: 0 30px;
  display: flex;
  align-items: center;
  gap: 16px;

  ${media.phone(`
    padding: 0 14px;
  `)}
`;


const LoginButton = styled.button`
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #222;
  border-radius: 10px;
  color: white;
`;

const SignUpButton = styled.button`
  color: black;
`;

const Icon = styled.div<{ content: string; focused: boolean }>`
  height: 40px;
  background: ${({ focused }) => (focused ? "#222222" : "#ffffff")};
  border: 1px solid #f1f0f0;
  border-radius: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 900ms ease;
  cursor: pointer;
  position: relative;
  width: ${({ focused }) => (focused ? "150px" : "40px")};

  &:hover {
    background: #222222;
    width: 150px;
    transition: all 900ms ease;

    ${media.phone(`
    width:50px
  `)}
  }

  ${media.phone(`
    width:50px
  `)}

  &::after {
    content: "${(props) => (props.focused ? props.content : "")}";
    color: #acacac;
    transition-delay: 900ms;

    ${media.phone(`
    display:none;
  `)}
  }
`;
