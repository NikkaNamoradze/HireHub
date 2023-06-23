import React from "react";
import { styled } from "styled-components";
import Card from "../card/Card";
import { Title } from "../other/styledCompnents";
import { Link } from "react-router-dom";

function NewJobs() {
  const list = [
    {
        id:1,
      image: "string",
      title: "Hatypo Studio",
      jobName: "UI Designer",
      companyName: "Surakarta, ID - Onsite",
      reqtext:
        "Requirements: Strong passion and active in the social world with a track record in charity or volunteer work and some text...",
      time: "1h ago",
    },
    {
        id:1,
      image: "string",
      title: "Hatypo Studio",
      jobName: "UI Designer",
      companyName: "Surakarta, ID - Onsite",
      reqtext:
        "Requirements: Strong passion and active in the social world with a track record in charity or volunteer work and some text...",
      time: "1h ago",
    },
    {
        id:1,
      image: "string",
      title: "Hatypo Studio",
      jobName: "UI Designer",
      companyName: "Surakarta, ID - Onsite",
      reqtext:
        "Requirements: Strong passion and active in the social world with a track record in charity or volunteer work and some text...",
      time: "1h ago",
    },
    {
        id:1,
      image: "string",
      title: "Hatypo Studio",
      jobName: "UI Designer",
      companyName: "Surakarta, ID - Onsite",
      reqtext:
        "Requirements: Strong passion and active in the social world with a track record in charity or volunteer work and some text...",
      time: "1h ago",
    },
    {
        id:1,
      image: "string",
      title: "Hatypo Studio",
      jobName: "UI Designer",
      companyName: "Surakarta, ID - Onsite",
      reqtext:
        "Requirements: Strong passion and active in the social world with a track record in charity or volunteer work and some text...",
      time: "1h ago",
    },
    {
        id:1,
      image: "string",
      title: "Hatypo Studio",
      jobName: "UI Designer",
      companyName: "Surakarta, ID - Onsite",
      reqtext:
        "Requirements: Strong passion and active in the social world with a track record in charity or volunteer work and some text...",
      time: "1h ago",
    },
  ];

  return (
    <>
      <Title>ახალი ვაკანსიები</Title>
      <Container>
        <CardContainer>
          {list.map((item, index) => {
            const { id, image, title, jobName, companyName, reqtext, time } = item;
            return (
            <Link to={'/job/'+id}>
              <Card
                key={index}
                image={image}
                title={title}
                jobName={jobName}
                companyName={companyName}
                reqtext={reqtext}
                time={time}
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
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;

  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  grid-gap: 10px;

`;

