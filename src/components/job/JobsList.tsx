import React from "react";
import styled from "styled-components";
import Card from "../card/Card";
import { Link } from "react-router-dom";
import Result from "./Result";

function JobsList() {
  const list = [
    {
      id: 1,
      image: "string",
      title: "Hatypo Studio",
      jobName: "UI Designer",
      companyName: "Surakarta, ID - Onsite",
      reqtext:
        "Requirements: Strong passion and active in the social world with a track record in charity or volunteer work and some text...",
      time: "1h ago",
    },
    {
      id: 1,
      image: "string",
      title: "Hatypo Studio",
      jobName: "UI Designer",
      companyName: "Surakarta, ID - Onsite",
      reqtext:
        "Requirements: Strong passion and active in the social world with a track record in charity or volunteer work and some text...",
      time: "1h ago",
    },
    {
      id: 1,
      image: "string",
      title: "Hatypo Studio",
      jobName: "UI Designer",
      companyName: "Surakarta, ID - Onsite",
      reqtext:
        "Requirements: Strong passion and active in the social world with a track record in charity or volunteer work and some text...",
      time: "1h ago",
    },
    {
      id: 1,
      image: "string",
      title: "Hatypo Studio",
      jobName: "UI Designer",
      companyName: "Surakarta, ID - Onsite",
      reqtext:
        "Requirements: Strong passion and active in the social world with a track record in charity or volunteer work and some text...",
      time: "1h ago",
    },
    {
      id: 1,
      image: "string",
      title: "Hatypo Studio",
      jobName: "UI Designer",
      companyName: "Surakarta, ID - Onsite",
      reqtext:
        "Requirements: Strong passion and active in the social world with a track record in charity or volunteer work and some text...",
      time: "1h ago",
    },
    {
      id: 1,
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
    <Container>
      <Result />
      <CardContainer>
        {list.map((item, index) => {
          const { id, image, title, jobName, companyName, reqtext, time } =
            item;
          return (
            <Link to={"/job/" + id}>
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
  );
}

export default JobsList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 367px;
  gap:23px;
  

  height: calc(90vh);
`;
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: scroll;
  height: 100%;
  gap: 24px;
`;
