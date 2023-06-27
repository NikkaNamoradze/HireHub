import React from "react";
import { styled } from "styled-components";

function Description({ description }: { description: string }) {
  return (
    <Container>
      <Title>ვაკანსიის აღწერა </Title>
      {description && (
        <Desc dangerouslySetInnerHTML={{ __html: description }}></Desc>
      )}
    </Container>
  );
}

export default Description;

const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #f5f4f4;
`;
const Desc = styled.div`
  font-family: "Urbanist";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  width: 100%;
  color: #acacac;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 10;
  overflow: hidden;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`