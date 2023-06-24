import React, { useEffect, useState } from "react";
import MainComponent from "../components/main_component/MainComponent";
import JobsList from "../components/job/JobsList";
import { MainConatiner } from "../components/other/styledCompnents";
import styled from "styled-components";
import Filter from "../components/Filter/Filter";
import request from "../api/api";
import { FILTER_URL, payload } from "../api/apiConfig";

function Job() {
  const [catPayload, setCatPayload] = useState<string[]>([]);
  const [workPayload, setWorkPayload] = useState<string[]>([]);
  const [empPayload, setEmpPayload] = useState<string[]>([]);
  const [expPayload, setExpPayload] = useState<string[]>([]);
  const [salaryPayload, setSalaryPayload] = useState<number[]>([0, 2500]);
  const [cityPayload, setCityPayload] = useState<string[]>([]);

useEffect(()=>{
  const req = async() =>{
    const res = await request(FILTER_URL, payload(catPayload, workPayload, empPayload, expPayload, salaryPayload, cityPayload))
    
    console.log(res)
  }
  req()


},[catPayload, workPayload, empPayload, expPayload, salaryPayload, cityPayload])



  return (
    <Container>
      <JobsList />
      <MainComponent />
      <Filter
        setCatPayload={setCatPayload}
        setWorkPayload={setWorkPayload}
        setEmpPayload={setEmpPayload}
        setExpPayload={setExpPayload}
        setSalaryPayload={setSalaryPayload}
        setCityPayload={setCityPayload}
        salaryPayload={salaryPayload}
      />
    </Container>
  );
}

export default Job;

const Container = styled.div`
  display: flex;
  gap: 24px;
  width: calc(100% - 64px);
  margin: auto;
`;
