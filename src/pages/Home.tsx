import React from "react";
import { styled } from "styled-components";


import Carousel from "../components/carousel/Carousel";
import { MainConatiner, Title } from "../components/other/styledCompnents";
import NewJobs from "../components/newJobs/NewJobs";


function Home() {
  return (
    <MainConatiner>
      <Carousel />
      <NewJobs />
    </MainConatiner>
  );
}

export default Home;
