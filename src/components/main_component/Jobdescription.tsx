import React from "react";
import { styled } from "styled-components";


interface JobDescriptionProps {
  description: string;
}

const JobDescription: React.FC<JobDescriptionProps> = ({ description }) => {
  console.log(description)
  return (
    <MotherDiv>
      <Desc>სამუშაოს აღწერა</Desc>
      <Desc2 dangerouslySetInnerHTML={{__html:description}}></Desc2>
    </MotherDiv>
  );
}

export default JobDescription;

const MotherDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 35px;
  gap: 11px;
`;

const Desc = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  color: #222222;
`;

const Desc2 = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Urbanist";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 14px;
  flex-direction: column;

  color: #222222;
  span {
    color: #222222;
    background-color: transparent!important;
    line-height: initial!important;
    text-align: left!important;
    font-size: 15px!important;
    line-height: 22.5px!important;
    font-family: Helvetica Neue!important;
  }
`;
