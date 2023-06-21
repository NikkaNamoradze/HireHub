import React from "react";
import { styled } from "styled-components";
import Info from "./Info";
import saved from "../../assets/icons/Bookmark.svg";

function Card({
  image,
  title,
  jobName,
  companyName,
  reqtext,
  time
}: {
  image: string;
  title: string;
  jobName: string;
  companyName: string;
  reqtext: string;
  time:string
}) {




  return (
    <MainConteiner>
      <Div>
        <InfoContainer>
          <Image src={image} alt="" loading="lazy" />
          <DivConatiner>
            <Title>{title}</Title>
            <JobName>{jobName}</JobName>
            <CompanyName>{companyName}</CompanyName>
          </DivConatiner>
        </InfoContainer>
        <SavedImg src={saved} alt="" />
      </Div>
      <Info />
      <ReqText>
        {reqtext}
      </ReqText>
      <Time>{time}</Time>
    </MainConteiner>
  );
}

export default Card;

const ReqText = styled.p`
  display: flex;
  color: #c5c5c5;
  width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;

const InfoContainer = styled.div`
  display: flex;
  gap: 11px;
`;

const Time = styled.div`
  border-top: 1px solid #e4e4e4;
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: auto;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
  color: #a6a6a6;
`;

const SavedImg = styled.img`
  display: flex;
  height: 30px;
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

const MainConteiner = styled.div`
  
  border-radius: 24px;
  background-color: #f4f3f3;
  padding: 23px;
  display: flex;
  gap: 15px;
  flex-direction: column;

`;
