import { styled } from "styled-components";
import jobs from "../../assets/icons/navigationIcon/works.svg";
import saved from "../../assets/icons/navigationIcon/saved.svg";
import contact from "../../assets/icons/navigationIcon/contact.svg";
import home from "../../assets/icons/navigationIcon/Home.svg";
import profile from "../../assets/icons/navigationIcon/Profile.svg";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {media} from "../../../src/assets/css/GlobalCss"

function Navigation() {
  const nav = [
    { icon: home, name: "Home" , path: '/'},
    { icon: jobs, name: "Jobs",path: '/jobs' },
    { icon: saved, name: "Saved",path: '/saved' },
    { icon: contact, name: "Contact",path: '/contact' },
    { icon: profile, name: "Profile",path: '/profile' },

  ];

  const location = useLocation();
  const endpoint = location.pathname;

  const [focused, setFocused] = useState<string>("");

  useEffect(() => {
    setFocused(endpoint);
  }, [endpoint]);

  return (
    <IconContainer>
      {nav.map((item, index) => {
        const {icon, name, path} = item
        return (
          <Link key={index} to={path}>
            <Icon
              focused={
                focused === path
              }
              content={name}
            >
              <img src={icon} alt="" />
            </Icon>
          </Link>
        );
      })}
    </IconContainer>
  );
}

export default Navigation;

const IconContainer = styled.div`
  display: flex;
  gap: 15px;
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
