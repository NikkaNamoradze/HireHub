import { styled } from "styled-components";
import Navigation from "./Navigation";
import HeaderProfile from "./HeaderProfile";
import { Link } from "react-router-dom";
import { media } from "../../assets/css/GlobalCss";
import logo from "../../../public/logo.svg"

function Header() {
  return (
    <Conatainer>
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>
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

const Logo = styled.div`
img{
  width: 44px;
  height: 44px;

  ${media.phone(`
    width: 36px;
    height: 36px;
  `)}
}
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

  ${media.phone(`
    gap: 14px;
  `)}
`;
