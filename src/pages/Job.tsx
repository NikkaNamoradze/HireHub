import React from 'react'
import MainComponent from '../components/main_component/MainComponent'
import JobsList from '../components/job/JobsList'
import { MainConatiner } from '../components/other/styledCompnents'
import styled from 'styled-components';
import Filter from '../components/Filter/Filter';

function Job() {
  return (
    <Container>
      <JobsList/>
      <MainComponent/>
      <Filter/>

    </Container>
  )
}

export default Job

const Container = styled.div`
display: flex;
gap: 24px;
width: calc( 100% - 64px ) ;
margin : auto;
  

`