import React, { useState } from "react";
import { styled } from "styled-components";
import search from "../../assets/icons/search.svg";
import filter from "../../assets/icons/filter.svg";
import Filter from "./Filter";
import { Link } from "react-router-dom";

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 53px;
  border-radius: 24px;
  padding: 0 10px;
  background-color: #f4f3f3;
  padding: 8px;
  justify-content: space-between;
`;

const SearchInput = styled.input`
  all: unset;
  border: none;
  outline: none;
  font-size: 15px;
  margin-left: 15px;
  background-color: #f4f3f3;
`;

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SearchImg = styled.img`
  margin-left: 15px;
`;
const Button = styled.button`
  background-color: #222222;
  border-radius: 25px;
  height: 100%;
  width: 45px;
  height: 45px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

function SearchBar({
  filter,
  setFilter,
}: {
  filter: boolean;
  setFilter: React.Dispatch<React.SetStateAction<boolean>>;
}) {


  const [keyword, setKeyword] = useState<string>()

  return (
    <SearchBarWrapper>
      <SearchBarContainer>
        <SearchBarWrapper>
          <SearchImg src={search} alt="Search" />
          <SearchInput type="text" placeholder="ძიება..." value={keyword} onChange={(event)=>setKeyword(event.target.value)} />
        </SearchBarWrapper>
        <Link
          to={{
            pathname: "/jobs",
            search: `?keyword=${keyword}`,
          }}
        >
          <Button>
            <svg
              width="20"
              height="20"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.7173 0.166626C16.5348 0.166626 21.2668 4.89863 21.2668 10.7161C21.2668 13.4608 20.2135 15.9641 18.4899 17.8428L21.8815 21.2274C22.1989 21.5448 22.2 22.0583 21.8826 22.3757C21.7244 22.5361 21.5153 22.6151 21.3074 22.6151C21.1004 22.6151 20.8924 22.5361 20.7332 22.3779L17.3006 18.9549C15.4949 20.401 13.2054 21.2667 10.7173 21.2667C4.89983 21.2667 0.166748 16.5336 0.166748 10.7161C0.166748 4.89863 4.89983 0.166626 10.7173 0.166626ZM10.7173 1.79163C5.79575 1.79163 1.79175 5.79454 1.79175 10.7161C1.79175 15.6377 5.79575 19.6417 10.7173 19.6417C15.6378 19.6417 19.6418 15.6377 19.6418 10.7161C19.6418 5.79454 15.6378 1.79163 10.7173 1.79163Z"
                fill="#f4f3f3"
              />
            </svg>
          </Button>
        </Link>
      </SearchBarContainer>
      <Filter focused={filter} setFocuse={setFilter} />
    </SearchBarWrapper>
  );
}

export default SearchBar;
