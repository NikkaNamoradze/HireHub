import React from 'react';
import { styled } from 'styled-components';
import search from "../../assets/icons/search.svg";
import filter from "../../assets/icons/filter.svg";
import Filter from './Filter';


const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 579px;
  height: 53px;
  border-radius: 24px;
  padding: 0 10px;
  background-color: #F4F3F3;
`;

const SearchInput = styled.input`
  all: unset;
  border: none;
  outline: none;
  font-size: 15px;
  margin-left: 15px;
  background-color: #F4F3F3;
`;


const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SearchImg = styled.img`
    margin-left: 15px;
`

function SearchBar() {
  return (
    <SearchBarWrapper>
      <SearchBarContainer>
        <SearchImg src={search} alt="Search" />
        <SearchInput type="text" placeholder="ძიება..." />
      </SearchBarContainer>
      <Filter/>
    </SearchBarWrapper>
  );
}

export default SearchBar;



