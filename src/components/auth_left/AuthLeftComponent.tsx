
import { styled } from "styled-components";
import LogoIcon from "../../assets/icons/logo.svg";
import { media } from "../../assets/css/GlobalCss";

function AuthLeftComponent() {
  return (
    <>
      <Container>
        <Icon>
          <img src={LogoIcon} alt="Logo" />
        </Icon>
        <Slogan>
          "თუ არ იმუშავებ არ გექნება ფული, არ გექნება ფული არ გექნება საშუალება
          იყიდო საჭმელი, ვერ იყიდი საჭმელს და ავად გახდები, ავად გახდები და ვერ
          იმკურნალებ, ვერ იმკურნალებ და მოკვდები, ამიტომ
          იმუშავე, სამუშაოდ კი შეარჩიე ჩვენი პლატფორმა HireHub"
        </Slogan>
      </Container>
    </>
  );
}

export default AuthLeftComponent;

const Container = styled.div`
  width: 40%;
  height: 100%;
  background-color: #222222;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  ${media.phone(`
      display:none;

    `)}
`;

const Icon = styled.div`
  width: 166px;
  height: 60px;
  left: 20px;
  top: 20px;
  position: absolute;
`;

const Slogan = styled.p`
  size: 18px;
  color: white;
  margin-left: 50px;
  margin-right: 50px;


`;
