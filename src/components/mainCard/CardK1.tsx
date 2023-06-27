import React from 'react'
import { styled } from 'styled-components'
import MainInfo1 from './MainInfo1';

function CardK1({
    image,
    title,
    jobName,
    companyName,

  }: {
    image: string;
    title: string;
    jobName: string;
    companyName: string;
    reqtext: string;
    start_time:string
    end_time: string
  
  }) {
  return (
    <MainConatiner>
      <MainInfo1 image={image} title={title} jobName={jobName} companyName={companyName}/>

    </MainConatiner>
  )
}

export default CardK1

const MainConatiner = styled.div`
  background-color: #f4f3f3;

    width: 100%;

`


