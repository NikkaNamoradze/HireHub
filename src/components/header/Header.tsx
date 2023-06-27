import { styled } from "styled-components";
import fire from "../../assets/icons/fire.svg";
import Navigation from "./Navigation";
import HeaderProfile from "./HeaderProfile";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Conatainer>

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
