import React from 'react';
import { styled } from 'styled-components';
import filter from "../../assets/icons/filter.svg";

function Filter() {
    return (
        <FilterButton>
        <FilterIcon src={filter} alt="Filter" />
      </FilterButton>
    );
}

export default Filter;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
`;

const FilterIcon = styled.img`
  height: 53px;
  width: 53px;
  margin-left: 18px;
`;
