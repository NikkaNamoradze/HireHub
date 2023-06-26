import React from "react";
import styled from "styled-components";

function Result({title, count}:{title:string, count:number}) {
  return <Container>{title} <Quantity>{count} ვაკანსია</Quantity> </Container>;
}

export default Result;

const Container = styled.div`
  width: 367px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 129%;
  padding: 15px 23px;
background-color: #222222;
  color: #ffffff;
  border-radius: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Quantity = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 129%;
  /* identical to box height, or 17px */

  color: #acacac;
`;
