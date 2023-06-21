import React from "react";
import { styled } from "styled-components";


import Carousel from "../components/carousel/Carousel";
import { MainConatiner, Title } from "../components/other/styledCompnents";
import NewJobs from "../components/newJobs/NewJobs";
import MainComponent from '../components/main_component/MainComponent';

function Home() {
  return (
    <MainConatiner>
      <Carousel />
      <NewJobs />
    </MainConatiner>
  );
}

export default Home;
