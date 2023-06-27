import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getRequest } from "../api/api";
import { SUGGEST, VACANCY } from "../api/apiConfig";
import JobsList from "../components/job/JobsList";
import Loader from "../components/loader/Loader";
import MainComponent from "../components/main_component/MainComponent";
import { DataInterface } from "../types";
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
  flex-direction: column;
  width: calc(100% - 64px);
  height: calc(100vh - 81.11px);
  margin: auto;


`;
