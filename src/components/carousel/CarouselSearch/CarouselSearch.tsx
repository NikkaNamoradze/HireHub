import React, { useState } from "react";
import { styled } from "styled-components";
import icon from "../../../assets/icons/searchIcon.svg";
import Input from "./Input";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

function CarouselSearch() {
  const [city, setCity] = useState<string[]>([]);
  const [keyword, setKeyword] = useState<string>("");

  return (
    <MainContainer>
      <Input value={keyword} setState={setKeyword} />
      <Continer>
        <Dropdown setState={setCity} />
        <Link
          to={{
            pathname: "/jobs",
            search: `?keyword=${keyword}&city=${city}`,
          }}
        >
          <Button>ძიება</Button>
        </Link>
      </Continer>
    </MainContainer>
  );
}

export default CarouselSearch;

const MainContainer = styled.div`
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 0px 74px -2px rgba(0, 0, 0, 0.06);
  border-radius: 32px;
  width: 50%;
  height: 82px;
  display: flex;
  padding: 13px 15px 15px 36px;
  left: 50%;
  align-items: center;
  justify-content: space-between;
  transform: translate(-50%, -60%);
`;
const Continer = styled.div`
  gap: 26px;
  display: flex;
`;

const Button = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 18px 55px;
  gap: 10px;
  background: #222222;
  border-radius: 21px;
  cursor: pointer;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;

  color: #ffffff;
`;
