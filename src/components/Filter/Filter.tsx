import React from "react";
import styled from "styled-components";
import Item from "./Item";
import CheckboxLabel from "./CheckBoxLabel";

import Range from "./Range";
import Dropdown from "../carousel/CarouselSearch/Dropdown";
import Input from "../carousel/CarouselSearch/Input";

function Filter() {
  return (
    <Container>
      <Item title="ხელფასი" content={<Range min={0} max={2500} />} />
      <Item title="ქალაქი" content={<Dropdown filter />} />
      <Item title="კატეგორია" content={<Category />} />
      <Item title="სამუშაო ტიპი" content={<WorkType />} />
      <Item title="დასაქმების ტიპი" content={<EmploymentType />} />
      <Item title="გამოცდილება" content={<Experience/>} />
    </Container>
  );
}

const WorkType = () => (
  <>
    <CheckboxContainer>
      {workType.map((item, index) => (
        <CheckboxLabel key={index}>{item}</CheckboxLabel>
      ))}
    </CheckboxContainer>
  </>
);


const workType: string[] = [
  'საოფისე',
  'საველე',
  'დისტანციური',
  'ჰიბრიდული',
];

const Experience = () => (
  <>
    <CheckboxContainer>
      {experience.map((item, index) => (
        <CheckboxLabel key={index}>{item}</CheckboxLabel>
      ))}
    </CheckboxContainer>
  </>
);


const experience: string[] = [
  'გამოცდილების გარეშე',
  '1 წელზე ნაკლები',
  '1-2 წელი',
  '2-3 წელი',
  '3-5 წელი',
  '5+ მეტი',
];


const EmploymentType = () => (
  <>
    <CheckboxContainer>
      {employmentType.map((item, index) => (
        <CheckboxLabel key={index}>{item}</CheckboxLabel>
      ))}
    </CheckboxContainer>
  </>
);

const employmentType: string[] = [
  'სრული განაკვეთი',
  'არასრული განაკვეთი',
  'საათობრივი',
  'ფრილანსი',
  'სტაჟირება',
  'ცვლები',
];


const Category = () => (
  <>
    <CheckboxContainer>
      {category.map((item, index) => (
        <CheckboxLabel key={index}>{item}</CheckboxLabel>
      ))}
    </CheckboxContainer>
  </>
);


const category: string[] = [
  "გაყიდვები",
  "მომხმარებელთან ურთიერთობები",
  "სხვა",
  "ადმინისტრაცია",
  "მზარეული",
  "მიმტანი",
  "დისტრიბუცია",
  "ჰორეკა",
  "საწყობი და წარმოება",
  "საცალო ვაჭრობა",
  "ფინანსები",
  "უსაფრთხოება",
  "საბანკო-საფინანსო",
  "ადამიანური რესურსები",
  "ინფორმაციული ტექნოლოგიები",
  "მარკეტინგი",
  "ლოჯისტიჯა",
  "მენეჯმენტი",
  "ავტოინდუსტრია",
  "სამედიცინო",
  "ტურიზმი",
  "კურიერი",
  "დიზაინერი",
];


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

const CategoryTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Filter;


