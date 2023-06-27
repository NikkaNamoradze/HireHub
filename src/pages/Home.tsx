import React, { useEffect, useState } from "react";
import Carousel from "../components/carousel/Carousel";
import { MainConatiner, Title } from "../components/other/styledCompnents";
import {postRequest} from "../api/api";
import { LATEST_URL, payload } from "../api/apiConfig";
import { DataInterface } from "../types";
import JobCard from "../components/mainCard/JobCard";
import Loader from "../components/loader/Loader";

function Home() {
  
  const [data, setData] = useState<any>()
 

  useEffect(()=>{
    async function req(){
      const res = await postRequest(LATEST_URL, payload(""))

      setData(res.items)
    }
    req()
  })
  
  if(!data){
    return(<Loader/>)
  }

  return (
    <MainConatiner>
      <Carousel />
      <JobCard title={"ახალი ვაკანსიები"} data={data as DataInterface[]}/>

    </MainConatiner>
  );
}

export default Home;
