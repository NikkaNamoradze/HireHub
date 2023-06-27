import React from 'react'
import CardDetails from '../components/SmallCard/CardDetails'
import  { useEffect, useState } from 'react'
import { getDatabase, ref, onValue} from "firebase/database";
import { app } from '../firebase/config';
import JobCard from '../components/mainCard/Jobcard';
import { DataInterface } from '../types';
import { MainConatiner } from "../components/other/styledCompnents";

function Saved() {


  const  [data , setData ] = useState<DataInterface[]>([])
  useEffect(()=>{

    const db = getDatabase(app);
    const starCountRef = ref(db, 'users/' + 'YOUR_USER_ID'  + '/saved' );
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const arr = Object.values(data);
      setData(arr as DataInterface[]);
    });

  },[])
    
  return (
    <MainConatiner>


      <JobCard title={ "შენახული ვაკანსიები"} data={data as DataInterface[]}/>
    </MainConatiner>

  )
}

export default Saved