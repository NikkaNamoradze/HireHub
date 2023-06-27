import { useEffect, useState } from "react";
import { postRequest } from "../api/api";
import { LATEST_URL, payload } from "../api/apiConfig";
import Carousel from "../components/carousel/Carousel";
import Loader from "../components/loader/Loader";
import JobCard from "../components/mainCard/JobCard";
import { MainConatiner } from "../components/other/styledCompnents";
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
  
  if(!data){
    return(<Loader/>)
  }

  return (
    <MainConatiner>
      <Carousel data={data?.slice(0, 4)} />
      <JobCard title={"ახალი ვაკანსიები"} data={data.slice(3) as DataInterface[]}/>

    </MainConatiner>
  );
}

export default Home;
