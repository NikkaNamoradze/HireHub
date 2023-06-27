import { styled } from "styled-components";
import saved from "../../assets/icons/Bookmark.svg";
import Viget from "../main_component/Vigets"
import MainInfo1 from "./MainInfo1";
import {media} from "../../assets/css/GlobalCss"


function MainC({
  image,
  title,
  jobName,
  companyName,


  working_type,
  employment_type,
  approximate_salary,
  end_date

}: {
  image: string;
  title: string;
  jobName: string;
  companyName: string;


  working_type: string
  employment_type: string
  approximate_salary:string ; 
  end_date: string

}) {


  return (

    <MainConteiner>
   
      <OneMore>
      <Div>
      <MainInfo1 image={image} title={title} jobName={jobName} companyName={companyName} />
      </Div>
 
      
      <InfosDic> 
        <Viget salary={approximate_salary}  jobType={working_type} dedline={end_date} employment_type={employment_type}  />

      </InfosDic>
       
      </OneMore>


      <ImgDiv>
      <SavedImg src={saved} alt="" />
      </ImgDiv>
    </MainConteiner>

  );
}


export default MainC;
const OneMore = styled.div`
display: flex;
justify-content:space-between;

`;




const InfosDic = styled.div`
display: flex;
justify-content:flex-end;

${media.tablet(`
    display: none;
  `)}


`;

const SavedImg = styled.img`
  display: flex;
  height: 30px;
  position: absolute;
  top: 10px;
  right: 10px;
`;


const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ImgDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;



const MainConteiner = styled.div`
  position: relative;
  border-radius: 24px;
  background-color: #f4f3f3;
  padding: 40px;
  width: 100%;



`;
