import React from "react";
import styled from "styled-components";
import Item from "./Item";

import Range from "./Range";
import Dropdown from "../carousel/CarouselSearch/Dropdown";

function Filter() {
  return (
    <Container>
      <Item title="ხელფასი" content={<Range min={0} max={2500} />} />
      <Item title="ქალაქი" content={<Dropdown filter />} />
    </Container>
  );
}

export default Filter;

const Container = styled.div`
  width: 367px;
  height: 90vh;
  border-radius: 24px;
  background: #f4f3f3;
  padding: 25px;
  display: flex;
  gap: 50px;
  flex-direction: column;
`;
