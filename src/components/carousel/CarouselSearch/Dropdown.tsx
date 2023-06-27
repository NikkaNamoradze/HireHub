import { useState } from "react";
import { styled } from "styled-components";
import DownArrow from "../../../assets/icons/DownArrow.svg";
function Dropdown({
  filter,
  setState,
}: {
  filter?: boolean;
  setState: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const [city, setCity] = useState<string>("");
  const item = [
    {
      name: "თბილისი",
      value: "თბილისი",
    },
    {
      name: "ბათუმი",
      value: "ბათუმი",
    },
    {
      name: "სტეფანწმინდა",
      value: "სტეფანწმინდა",
    },

    {
      name: "რუსთავი",
      value: "რუსთავი",
    },
    {
      name: "აჭარის ავტ. რესპუბლიკა",
      value: "აჭარის ავტონომიური რესპუბლიკა",
    },
    {
      name: "ბორჯომი",
      value: "ბორჯომი",
    },
    {
      name: "საქართველო",
      value: "საქართველო",
    },
    {
      name: "სიღნაღი",
      value: "სიღნაღი",
    },
  ];

  return (
    <MainConatiner>
      <DropDown filter={filter}>
        {city === "" ? "ქალაქები" : city}
        <img src={DownArrow} alt="" />
      </DropDown>
      <DropdownContent>
        {item.map((item, index) => {
          return (
            <Item
              focused={item.name === city}
              key={index}
              onClick={() => {
                setCity(item.name);
                setState( [item.value]);;
              }}
            >
              {item.name}
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
const DropDown = styled.div<{ filter?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 25px;
  gap: 40px;
  background: ${({ filter }) => (filter ? "#ffff" : "#f4f3f3")};
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
