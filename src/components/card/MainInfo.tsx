import React from "react";
import { styled } from "styled-components";
import { IMAGE_URL } from "../../api/apiConfig";
import { media } from "../../assets/css/GlobalCss";

function MainInfo({
  image,
  title,
  jobName,
  companyName,
}: {
  image: string;
  title: string;
  jobName: string;
  companyName: string;
}) {
  return (
    <InfoContainer>
      <Image src={IMAGE_URL(image)} alt="" loading="lazy" />
      <DivConatiner>
        <Title>{title}</Title>
        <JobName>{jobName}</JobName>
        <CompanyName>{companyName}</CompanyName>
      </DivConatiner>
    </InfoContainer>
  );
}

export default MainInfo;

const InfoContainer = styled.div`
  display: flex;
  gap: 11px;
  width: 90%;
`;

const Image = styled.img`
  width: 65px;
  height: 65px;
  background: #2a9df4;
  border-radius: 26px;
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 26px;
  color: #000000;
`;
const JobName = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 18px;
  color: #000000;

  ${media.phone(`
    font-size: 16px;

  `)}
`;

const CompanyName = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 18px;
  color: #acacac;
`;
const DivConatiner = styled(Div)`
  display: flex;
  gap: 2px;
  flex-direction: column;
  align-items: flex-start;
`;
