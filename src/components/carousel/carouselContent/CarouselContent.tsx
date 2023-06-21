import { styled } from "styled-components";
import Info from "./Info";
import Details from "./Details";
import Description from "./Description";

function CarouselContent({ item }: { item: any }) {
  const { image } = item;

  return (
    <>
      <Div>
        <InfoContainer>
          <Info image={image} />
          <Details />
        </InfoContainer>
        <Description />
      </Div>
    </>
  );
}

export default CarouselContent;

const Div = styled.div`
    width: 100%;
    display: flex;
    background-color: #222222;
    flex-direction: column;
    padding: 4% 10%;
    gap:40px;
  
`;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
