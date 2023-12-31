import styled from "styled-components";
import Item from "./Item";

import { media } from "../../assets/css/GlobalCss";
import { FilterInterface } from "../../types";
import Dropdown from "../carousel/CarouselSearch/Dropdown";
import CheckBoxList from "./CheckBoxList";
import Range from "./Range";
import { category, employmentType, experience, workType } from "./filterContent";



function Filter({setCatPayload,setWorkPayload,setEmpPayload, setExpPayload, setSalaryPayload,setCityPayload,salaryPayload, show}:FilterInterface) {


  return (
    <Container show={show}>
      {
        show &&<>
      <Item title="ხელფასი" content={<Range min={0} max={2500} minValue={salaryPayload[0]} maxValue={salaryPayload[1]} range={setSalaryPayload}/>} />
      <Item title="ქალაქი" content={<Dropdown filter setState={setCityPayload} />} />
      <Item title="კატეგორია" content={<CheckBoxList items={category} setState={setCatPayload} />} />
      <Item title="სამუშაო ტიპი" content={<CheckBoxList items={workType}   setState={setWorkPayload}/>} />
      <Item title="დასაქმების ტიპი" content={<CheckBoxList items={employmentType} setState={setEmpPayload} />} />
      <Item title="გამოცდილება" content={<CheckBoxList items={experience} setState={setExpPayload} />} />
        </>
      }
    </Container>
  );
}



const Container = styled.div<{show:boolean}>`
  /* width: ${({show})=> show? "500px" : "0px"} ; */
  transition: 1s;
  height: 100%;
  border-radius: 24px;
  background: #f4f3f3;
  padding: 25px;
  display: flex;
  gap: 50px;
  flex-direction: column;
  overflow-y: auto;

  ${media.tablet(`
    display:none
  `)
    
  }
`;


export default Filter;
