import React from "react";
import { styled } from "styled-components";

function HeaderProfile() {
  return (
    <Container>
      <ProfileImage src="https://media.allure.com/photos/621e32e93c1316abf45cb59b/1:1/w_2911,h_2911,c_limit/kendall%20jenner%20.jpg" />
      <div>
        <Name>Kendall Jenner</Name>
        <Profesion>FrontEnd Developer</Profesion>
      </div>
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
`;
const ProfileImage = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 150px;
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
