import React from "react";
import { styled } from "styled-components";

function Description() {
  return (
    <Container>
      <Title>ვაკანსიის აღწერა </Title>
      <Desc>
        Collaborate with the Digital Marketing team to propose, design, &
        deliver wireframes, user journeys, and UI mock-ups. Collaborate with the
        SEO & Content team to establish best practices for high-performing
        websites.. Collaborate with Front-End Developers to ensure high quality
        & bug-free deliverables. Develop high-fidelity UI prototypes for
        responsive websites & maintain consistency of our design system. Keep
        up-to-date with the latest UI/UX & web design trends so as to propose
        improvements on current websites.
      </Desc>
    </Container>
  );
}

export default Description;

const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  color: #f5f4f4;
`;
const Desc = styled.div`
  font-family: "Urbanist";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;

  color: #acacac;
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap:12px
`
