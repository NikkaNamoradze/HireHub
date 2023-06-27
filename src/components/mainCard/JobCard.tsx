import React from "react";
import { styled } from "styled-components";
import { Title } from "../other/styledCompnents";
import { Link } from "react-router-dom";
import { DataInterface } from "../../types";
import MainC from "./MainC";



function JobCard({data}:{data:DataInterface[]}) {



  return (
    <>
      <Title>ახალი ვაკანსიები</Title>
      <Container>
        <CardContainer>
          {data?.map((item, index) => {
            const { id, address, business, name, end_date, working_type, employment_type,approximate_salary } = item;
            return (
            <Link to={'/job/'+id}>
              <OneMore>
              <MainC
                    key={index}
                    image={business.image.name}
                    title={address?.secondary_text}
                    jobName={name}
                    companyName={business?.official_name}
                    end_date={end_date}
                    working_type={working_type}
                    employment_type={employment_type}
                    approximate_salary={employment_type}               
              />

              </OneMore>
            </Link>
            );
          })}
        </CardContainer>
      </Container>
    </>
  );
}

export default JobCard;


const OneMore = styled.div`
display: flex;
justify-content:space-between;

`;
const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

`;

const CardContainer = styled.div`
  flex-direction: column;
  flex-wrap: wrap; 
  gap: 20px;
  display: grid;

  grid-gap: 10px;

`;

