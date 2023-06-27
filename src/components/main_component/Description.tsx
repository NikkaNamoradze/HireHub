import React from "react";
import { styled } from "styled-components";


interface JobDescriptionProps {
  description: string;
  title:string
}

const Description: React.FC<JobDescriptionProps> = ({ description , title}) => {
  return (
    <MotherDiv>
      <Desc>{title}</Desc>
      <Desc2 dangerouslySetInnerHTML={{__html:description}}></Desc2>
    </MotherDiv>
  );
}

export default Description;

const MotherDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 35px;
  gap: 11px;
`;

const Desc = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  color: #222222;
`;

const Desc2 = styled.div`
  display: flex;
  justify-content: center;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  flex-direction: column;

  color: #222222;
  span {
    color: #222222;
    background-color: transparent!important;
    line-height: initial!important;
    text-align: left!important;
    font-size: 15px!important;
    line-height: 22.5px!important;

  }
`;
