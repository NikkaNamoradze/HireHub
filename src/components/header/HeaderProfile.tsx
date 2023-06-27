import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { media } from "../../../src/assets/css/GlobalCss";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function HeaderProfile() {
  const [displayName, setDisplayName] = useState<string|null>("");
  const [photoUrl, setphotoUrl] = useState<string|null>("");
  const uid = Cookies.get("uid");

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const userDisplayName = user.displayName;
        setphotoUrl(user.photoURL)
        setDisplayName(userDisplayName);
        console.log(user)
      } else {
        setphotoUrl("")
        setDisplayName("");
      }
    });


    return () => unsubscribe();
  }, []);

  if (uid) {
    return (
      <Container>
        <Namee>
          <Name>{displayName}</Name>
        </Namee>
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

const Namee = styled.div`
  ${media.phone(`
    display:none;
  `)}
`;

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

const ProfileImage = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 150px;

  ${media.phone(`
    width: 38px;
    height: 38px;
  `)}
`;

const Name = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
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
