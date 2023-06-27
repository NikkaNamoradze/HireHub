import React, { useState } from "react";
import styled from "styled-components";
import UpperSection from "./UpperSection";
import Vigets from "./Vigets";
import Switcher from "./Switcher";

import { DataInterface } from "../../types";
import Description from "./Description";


import MapComponentn from "./Map";

function MainComponent({ data }: { data: DataInterface }) {
  
  if (!data) {
    return null; 
  }

  const [swithch, setSwitch ] = useState<boolean>(true)

  
  const {  address, info, business, name, working_type,employment_type, approximate_salary , end_date } = data;
  return (
    <Container>
      <Content>
        <UpperSection
          company={business?.official_name}
          position={name}
          location={address?.secondary_text}
          image={business?.image.name}
        />
        <Vigets salary={approximate_salary.text}  jobType={working_type} dedline={end_date} employment_type={employment_type}  />
        <Switcher swithch={swithch} setSwitch={setSwitch} />

        {
          swithch?
          <Description title={"სამუშაოს აღწერა"} description={info.about_role} />
          :
          <>
          <Description title={"კომპანიის აღწერა"} description={business.description} />
          {address&&<MapComponentn address={address?.description} lat={address?.lat} lng={address?.lng}/>}
          </>
        }


        <Apply>დაკავშირება</Apply>
      </Content>
    </Container>
  );
}

export default MainComponent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 23px;
  background: #f4f3f3;
  border-radius: 24px;
  padding: 23px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  gap: 23px;
`;

const Apply = styled.button`
  padding: 18px 256px;
  gap: 10px;
  background: #222222;
  border-radius: 21px;
  color: #ffffff;
  margin: auto;
`;
