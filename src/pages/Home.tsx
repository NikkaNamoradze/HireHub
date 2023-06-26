import React, { useEffect, useState } from "react";
import { styled } from "styled-components";


import Carousel from "../components/carousel/Carousel";
import { MainConatiner, Title } from "../components/other/styledCompnents";
import NewJobs from "../components/newJobs/NewJobs";
import MainComponent from '../components/main_component/MainComponent';
import {postRequest} from "../api/api";
import { LATEST_URL, payload } from "../api/apiConfig";
import { DataInterface } from "../types";

function Home() {
  
  const [data, setData] = useState<any>()
 

  useEffect(()=>{
    async function req(){
      const res = await postRequest(LATEST_URL, payload(""))

      setData(res.items)
    }
    req()
  })
  console.log("=====",data)

  return (
    <MainConatiner>
      <Carousel />
      <NewJobs  data={data as DataInterface[]}/>
    </MainConatiner>
  );
}

export default Home;
