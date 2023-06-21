import React from "react";
import { styled } from "styled-components";

function Details() {
  const list = [
    {
      title: "ხელფასი",
      value: "$10 /hour",
      color: "#BDF4C9",
    },
    {
      title: "სამუშაოს ტიპი",
      value: "Part-Time",
      color: "#BEE5F6",
    },
    {
      title: "კანდიდატების რაოდენობა",
      value: "20 /50",
      color: "#FED0AB",
    },
    {
      title: "უნარები",
      value: "Expert",
      color: "#CECCFF",
    },
  ];

  return (
    <MainContainer>
      {list.map((item, index) => {
        return (
          <Container key={index} color={item.color}>
            <Title>{item.title}</Title>
            <Value>{item.value}</Value>
          </Container>
        );
      })}
    </MainContainer>
  );
}

export default Details;

const MainContainer = styled.div`
    display: flex;
    gap: 11px;
`

const Container = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  padding: 15px 33px;
  border-radius: 26px;
  flex-direction:column;
  display: flex;
  gap:9px;
`;
const Title = styled.div`

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 129%;
  text-align: center;
  color: #000000;
`;
const Value = styled.div`

  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 129%;
  text-align: center;
  color: #000000;
`;
