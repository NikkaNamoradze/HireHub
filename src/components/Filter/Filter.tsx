import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Item from "./Item";
import CheckboxLabel from "./CheckBoxLabel";

import Range from "./Range";
import Dropdown from "../carousel/CarouselSearch/Dropdown";
import CheckBoxList from "./CheckBoxList";
import { category, employmentType, experience, workType } from "./filterContent";
import { FilterInterface } from "../../types";



function Filter({setCatPayload,setWorkPayload,setEmpPayload, setExpPayload, setSalaryPayload,setCityPayload,salaryPayload}:FilterInterface) {


  return (
    <Container>
      <Item title="ხელფასი" content={<Range min={0} max={2500} minValue={salaryPayload[0]} maxValue={salaryPayload[1]} range={setSalaryPayload}/>} />
      <Item title="ქალაქი" content={<Dropdown filter setState={setCityPayload} />} />
      <Item title="კატეგორია" content={<CheckBoxList items={category} setState={setCatPayload} />} />
      <Item title="სამუშაო ტიპი" content={<CheckBoxList items={workType}   setState={setWorkPayload}/>} />
      <Item title="დასაქმების ტიპი" content={<CheckBoxList items={employmentType} setState={setEmpPayload} />} />
      <Item title="გამოცდილება" content={<CheckBoxList items={experience} setState={setExpPayload} />} />
    </Container>
  );
}



const Container = styled.div`
  width: 367px;
  height: 90vh;
  border-radius: 24px;
  background: #f4f3f3;
  padding: 25px;
  display: flex;
  gap: 50px;
  flex-direction: column;
  overflow-y: auto;
`;


export default Filter;
