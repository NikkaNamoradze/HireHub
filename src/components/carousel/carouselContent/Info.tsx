import { styled } from "styled-components";
import { IMAGE_URL } from "../../../api/apiConfig";

function Info({ image , title,companyName,jobName}: {title:string, companyName:string, jobName:string, image: string }) {
  return (
    <>
      <Div>
        <Image src={IMAGE_URL(image)} alt="" loading="lazy" />
        <DivConatiner>
          <Title>{title}</Title>
          <JobName>{jobName}</JobName>
          <CompanyName>{companyName}</CompanyName>
        </DivConatiner>
      </Div>
    </>
  );
}

export default Info;

const Image = styled.img`
  width: 105px;
  height: 105px;
  background: #2a9df4;
  border-radius: 26px;
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  gap:20px
`;
const Title = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
  color: #f5f4f4;
`;
const JobName = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  color: #f5f4f4;
`;

const CompanyName = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #acacac;
`;
const DivConatiner = styled(Div)`
    display: flex;
    gap: 9px;
    flex-direction: column;
    align-items: flex-start;

`;
