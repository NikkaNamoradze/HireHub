import React from 'react'
import MainInfo from './MainInfo'
import { styled } from 'styled-components'

function VCard({
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
      <MainInfo image={image} title={title} jobName={jobName} companyName={companyName}/>

    </MainConatiner>
  )
}

export default VCard

const MainConatiner = styled.div`
  background-color: #f4f3f3;

    width: 100%;

`


