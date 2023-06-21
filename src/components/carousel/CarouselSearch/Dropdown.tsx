import { useState } from "react";
import { styled } from "styled-components";
import DownArrow from "../../../assets/icons/DownArrow.svg";
function Dropdown() {
  const [city, setCity] = useState<string>("");
  const item = [
    "თბილისი",
    "ბათუმი",
    "სტეფანწმინდა",
    "რუსთავი",
    "აჭარის",
    "ავტ. რესპუბლიკა",
    "ბორჯომი",
    "საქართველო",
  ];

  return (
    <MainConatiner>
      <DropDown>
        {city === "" ? "ქალაქები" : city}
        <img src={DownArrow} alt="" />
      </DropDown>
      <DropdownContent>
        {item.map((item, index) => {
          return (
            <Item
              focused={item === city}
              key={index}
              onClick={() => setCity(item)}
            >
              {item}
            </Item>
          );
        })}
        <Item focused={true} onClick={() => setCity("")}>
          გასუფთავება
        </Item>
      </DropdownContent>
    </MainConatiner>
  );
}

export default Dropdown;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f4f3f3;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.098);
  z-index: 1;
`;
const DropDown = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 25px;
  gap: 40px;
  background: #f4f3f3;
  border-radius: 22px;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  color: #929292;
`;

const MainConatiner = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${DropdownContent} {
    display: block;
  }
`;

const Item = styled.button<{ focused: boolean }>`
  all: unset;
  color: #222222;
  padding: 12px 16px;
  display: block;
  width: 80%;
  background-color: ${({ focused }) => (focused ? "#ebebeb" : "#fff")};
  &:hover {
    color: #f4f3f3;
    background-color: #222222;
  }
`;
