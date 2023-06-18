import { styled } from "styled-components";
import jobs from "../../assets/icons/works.svg";
import saved from "../../assets/icons/saved.svg";
import contact from "../../assets/icons/contact.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Navigation() {
  const nav = [
    { icon: jobs, name: "Jobs" },
    { icon: saved, name: "Saved" },
    { icon: contact, name: "Contact" },
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
        return (
          <Link key={index} to={"/" + item.name.toLowerCase()}>
            <Icon
              focused={focused === "/" + item.name.toLowerCase()}
              content={item.name}
            >
              <img src={item.icon} alt="" />
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

  }
  &::after {
    content: "${(props) => (props.focused ? props.content : "")}";
    color: #acacac;
    transition-delay: 900ms;
  }
`;
