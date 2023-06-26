import React from "react";
import { styled } from "styled-components";
import { format } from "../../utils/dateFormat";

function Details({
  salary,

  jobType,
  dedline,
  employment_type,
}: {
  salary: string;
  jobType: string;
  dedline: string;
  employment_type: string;
}) {
  const list = [
    {
      title: "ხელფასი",
      value: salary,
      color: "#BDF4C9",
    },
    {
      title: "სამუშაოს ტიპი",
      value: jobType,
      color: "#BEE5F6",
    },
    {
      title: "დედლაინი",
      value: format(dedline),
      color: "#FED0AB",
    },
    {
      title: "დასაქმების ტიპი",
      value: employment_type,
      color: "#CECCFF",
    },
  ];

  return (
    <MainContainer>
      {list.map((item, index) => {
        return (
          item.value === "" || item.value !== null && (
            <Container key={index} color={item.color}>
              <Title>{item.title}</Title>
              <Value>{item.value}</Value>
            </Container>
          )
        );
      })}
    </MainContainer>
  );
}

export default Details;

const MainContainer = styled.div`
  display: flex;
  gap: 11px;
  justify-content: center;
`;

const Container = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  padding: 15px 33px;
  border-radius: 26px;
  flex-direction: column;
  display: flex;
  gap: 9px;
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
