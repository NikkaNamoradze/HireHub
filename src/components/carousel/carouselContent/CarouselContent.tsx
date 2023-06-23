import { styled } from "styled-components";
import Info from "./Info";

import Description from "./Description";
import Vigets from "../../main_component/Vigets";

function CarouselContent({ item }: { item: any }) {
  const { image } = item;

  return (
    <>
      <Div>
        <InfoContainer>
          <Info image={image} />
          <Vigets/>
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
