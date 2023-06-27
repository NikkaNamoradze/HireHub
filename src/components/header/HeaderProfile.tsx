import React from "react";
import { styled } from "styled-components";
import { media } from "../../../src/assets/css/GlobalCss"

function HeaderProfile() {
  return (
    <Container>
      <ProfileImage src="https://media.allure.com/photos/621e32e93c1316abf45cb59b/1:1/w_2911,h_2911,c_limit/kendall%20jenner%20.jpg" />
      <Namee>
        <Name>Kendall Jenner</Name>
        <Profesion>FrontEnd Developer</Profesion>
      </Namee>
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
const Profesion = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #acacac;
`;
