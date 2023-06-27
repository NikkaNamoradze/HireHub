import { styled } from "styled-components";
import Info from "./Info";
import { media } from "../../../assets/css/GlobalCss";
import Description from "./Description";
import Vigets from "../../main_component/Vigets";
import { DataInterface } from "../../../types";
import { Link } from "react-router-dom";

function CarouselContent({ item }: { item: DataInterface }) {
  const {
    id,
    address,
    info,
    working_type,
    employment_type,
    approximate_salary,
    business,
    name,
    end_date,

  } = item as DataInterface;

  return (

    <DivContainer>

    <Link
    to={
       "/job/" + id
    }

  >
      <Div>
        <InfoContainer>
          <Info image={business?.image?.name} jobName={name} title={address?.secondary_text} companyName={business?.official_name} />
          <Container>
            <Vigets
              salary={approximate_salary.text}
              jobType={working_type}
              dedline={end_date}
              employment_type={employment_type}
            />
          </Container>
        </InfoContainer>
        <Description  description={info?.about_role} />
      </Div>
    </Link>
    </DivContainer>
  );
}

export default CarouselContent;

const Container = styled.div`
  ${media.phone(`
    display:none;
  `)}
`;
const Div = styled.div`
  width: 100%;
  display: flex;
  background-color: #222222;
  flex-direction: column;
  padding: 4% 10%;
  gap: 40px;
  height: 100%;
`;
const DivContainer = styled.div`
  width: 100%;

`;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
