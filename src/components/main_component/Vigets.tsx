import React from 'react';
import styled from 'styled-components';

const rame = [
  {
    title: "salary",
    value: "$10",
    color: "#000",
  },
  {
    title: "salary",
    value: "$10",
    color: "#000",
  },
  {
    title: "salary",
    value: "$10",
    color: "#000",
  },
  {
    title: "salary",
    value: "$10",
    color: "#000",
  },
];

function Vigets() {
  return (
    <ParentCard>
      {rame.map((item) => (
        <MiniCard key={item.title}>
          <MainTxt>{item.title}</MainTxt>
          <Desc>
            <span>{item.value}</span> /hour
          </Desc>
        </MiniCard>
      ))}
    </ParentCard>
  );
}

export default Vigets;

const ParentCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 12px;
  margin: 23px;
`;

const MiniCard = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 15px 33px;
  gap: 10px;
  width: 144px;
  height: 76px;
  background: #bee5f6;
  border-radius: 26px;
`;

const MainTxt = styled.h3`
  font-family: 'Urbanist';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
`;

const Desc = styled.p`
  font-family: 'Urbanist';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  text-align: center;

  span {
    font-weight: 700;
  }
`;
