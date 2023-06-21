import { styled } from "styled-components";
import fire from "../../assets/icons/fire.svg";
import Navigation from "./Navigation";
import HeaderProfile from "./HeaderProfile";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Conatainer>
      <TitleConatiner>
        <Title>Welcome Back, Let’s Find Your Job!</Title>
        <FireImg src={fire} alt="" />
      </TitleConatiner>
      <NavigationConatiner>
        <Navigation />
        <Link to={"/profile"}>
          <HeaderProfile />
        </Link>
      </NavigationConatiner>
    </Conatainer>
  );
}

export default Header;

const Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 27px;
  line-height: 33px;
  color: #000000;
`;
const TitleConatiner = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;
const FireImg = styled.img`
  display: flex;
  height: 30px;
`;
const Conatainer = styled.header`
  width: calc(100% - 48px);
  margin: auto;
  padding: 2vh 0;
  display: flex;
  justify-content: space-between;
`;
const NavigationConatiner = styled.div`
  display: flex;
  gap: 50px;
`;
