
import  { useEffect, useState } from 'react'
import { getDatabase, ref, onValue} from "firebase/database";
import { app } from '../firebase/config';
import JobCard from '../components/mainCard/JobCard';
import { DataInterface } from '../types';
import { MainConatiner } from "../components/other/styledCompnents";
import Loader from '../components/loader/Loader';
import { useSelector } from "react-redux";
import { RootState } from '../store/store';

function Saved() {
  const uid = useSelector((state: RootState) => state.user.uid);


  const  [data , setData ] = useState<DataInterface[]>([])
  useEffect(()=>{

    const db = getDatabase(app);
    const starCountRef = ref(db, 'users/' + uid  + '/saved' );
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const arr = Object.values(data);
      setData(arr as DataInterface[]);
    });

  },[])

  if (!data ) {
    return <Loader />;
  }
    
  return (
    <MainConatiner>


      <JobCard title={ "შენახული ვაკანსიები"} data={data as DataInterface[]}/>
    </MainConatiner>

  )
}

export default Saved