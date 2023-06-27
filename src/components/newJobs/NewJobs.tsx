
import { styled } from "styled-components";
import Card from "../card/Card";
import { Title } from "../other/styledCompnents";
import { Link } from "react-router-dom";
import { DataInterface } from "../../types";


function NewJobs({data}:{data:DataInterface[]}) {



  return (
    <>
      <Title>ახალი ვაკანსიები</Title>
      <Container>
        <CardContainer>
          {data?.map((item, index) => {
            const { id, address, info, business, name, end_date, start_date } = item;
            return (
            <Link to={'/job/'+id}>
              <Card
                key={index}
                image={business.image.name}
                title={address?.secondary_text}
                jobName={name}
                companyName={business?.official_name}
                reqtext={info?.about_role}
                start_time={start_date}
                end_time={end_date}
              />
            </Link>
            );
          })}
        </CardContainer>
      </Container>
    </>
  );
}

export default NewJobs;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

`;

const CardContainer = styled.div`
  /* display: flex;
  gap: 20px;
  justify-content: center; */
  flex-direction: column;
  flex-wrap: wrap; 

  display: grid;
  /* grid-template-columns: repeat(4, 1fr);  */
  grid-gap: 10px;

`;

