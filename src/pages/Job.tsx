import React, { useEffect, useState } from "react";
import MainComponent from "../components/main_component/MainComponent";
import JobsList from "../components/job/JobsList";
import { MainConatiner } from "../components/other/styledCompnents";
import styled from "styled-components";
import Filter from "../components/Filter/Filter";
import { getRequest } from "../api/api";
import { FILTER_URL, SUGGEST, VACANCY, payload } from "../api/apiConfig";
import { DataInterface } from "../types";
import { useLocation, useParams } from "react-router-dom";
import Loader from "../components/loader/Loader";
function Job() {
  const { id } = useParams();

  const [suggestData, setSuggestData] = useState<DataInterface[]>();
  const [vacancyData, setVacancyData] = useState<DataInterface>();

  useEffect(() => {
    const fetchData = async () => {
      const suggestResponse = await getRequest(SUGGEST(id ?? ""));
      const vacancyResponse = await getRequest(VACANCY(id ?? ""));
      setSuggestData(suggestResponse.items);
      setVacancyData(vacancyResponse);
    };

    fetchData();
  }, [id]);

  if (!suggestData || !vacancyData) {
    return <Loader />;
  }

  return (
    <Container>
      <JobsList
        data={suggestData}
        count={suggestData.length}
        title={"მსგავსი ვაკანსიები"}
      />
      <MainComponent data={vacancyData} />
    </Container>
  );
}

export default Job;

const Container = styled.div`
  display: flex;
  gap: 24px;
  width: calc(100% - 64px);
  height: calc(100vh - 81.11px);
  margin: auto;
`;
