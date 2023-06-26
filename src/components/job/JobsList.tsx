import React from "react";
import styled from "styled-components";
import Card from "../card/Card";
import { Link } from "react-router-dom";
import Result from "./Result";
import { DataInterface } from "../../types";

function JobsList({
  data,
  title,
  count,
  jobs,
}: {
  jobs?: boolean;
  data: DataInterface[];
  count: number;
  title: string;
}) {
  return (
    <Container>
      <Result count={count} title={title} />
      <CardContainer>
        {data?.map((item: DataInterface, index: number) => {
          const { id, address, info, business, name, end_date, start_date } =
            item as DataInterface;

          return (
            <Link
              to={
                jobs
                  ? {
                      pathname: "/jobs",
                      search: `?job=${id}`,
                    }
                  : "/job/" + id
              }
              key={index}
            >
              <Card
                image={business?.image?.name}
                title={address?.secondary_text}
                jobName={name}
                companyName={business?.official_name}
                reqtext={info?.about_role}
                start_time={start_date}
                end_time={end_date}
              />
            </Link>
          );
          // }
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
  gap: 23px;
  height: 100%;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: scroll;
  height: 100%;
  gap: 24px;
`;
