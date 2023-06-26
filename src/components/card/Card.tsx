import { styled } from "styled-components";
import Info from "./Info";
import saved from "../../assets/icons/Bookmark.svg";
import MainInfo from "./MainInfo";
import { format } from "../../utils/dateFormat";

function Card({
  image,
  title,
  jobName,
  companyName,
  reqtext,

  start_time,
  end_time
}: {
  image: string;
  title: string;
  jobName: string;
  companyName: string;
  reqtext: string;
  start_time:string
  end_time: string

}) {



  return (
    <MainConteiner>
      <Div>
      <MainInfo image={image} title={title} jobName={jobName} companyName={companyName} />

        <SavedImg src={saved} alt="" />
      </Div>
      <Info />
      <ReqText dangerouslySetInnerHTML={{ __html: reqtext }}>

      </ReqText>
      <Time>{format(start_time)+" - " + format(end_time) }</Time>
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


const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;



const MainConteiner = styled.div`
  
  border-radius: 24px;
  background-color: #f4f3f3;
  padding: 23px;
  display: flex;
  gap: 15px;
  flex-direction: column;

`;
