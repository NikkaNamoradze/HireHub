import  { useEffect, useState } from "react";
import MainComponent from "../components/main_component/MainComponent";
import JobsList from "../components/job/JobsList";
import styled from "styled-components";
import Filter from "../components/Filter/Filter";
import { getRequest, postRequest } from "../api/api";
import { FILTER_URL, VACANCY, payload } from "../api/apiConfig";
import { useLocation } from "react-router-dom";
import { DataInterface } from "../types";
import SearchhBar from "../components/SearchBar/SearchhBar";
import Loader from "../components/loader/Loader";

export default function Jobs() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const keyword = query?.get("keyword") ?? "";
  const city = query?.get("city");
  const job = query?.get("job") ?? "";

  const [catPayload, setCatPayload] = useState<string[]>([]);
  const [workPayload, setWorkPayload] = useState<string[]>([]);
  const [empPayload, setEmpPayload] = useState<string[]>([]);
  const [expPayload, setExpPayload] = useState<string[]>([]);
  const [salaryPayload, setSalaryPayload] = useState<number[]>([0, 2500]);
  const [cityPayload, setCityPayload] = useState<string[]>(
    city !== null ? [city] : []
  );
  const [data, setData] = useState<DataInterface[]>([]);
  const [maindata, setMainData] = useState<DataInterface>(data[0]);

  const [filter, setFilter] = useState<boolean>(true);

  useEffect(() => {
    const req = async () => {
      const res1 = await postRequest(
        FILTER_URL,
        payload(
          keyword,
          catPayload,
          workPayload,
          empPayload,
          expPayload,
          salaryPayload,
          cityPayload
        )
      );
      setData(res1.items);

      setMainData(res1.items[0]);
    };
    req();
  }, [
    catPayload,
    workPayload,
    empPayload,
    expPayload,
    salaryPayload,
    cityPayload,
    keyword,
    city,
  ]);

  useEffect(() => {
    const req = async () => {
      const res2 = await getRequest(VACANCY(job));
      setMainData(res2);
    };
    req();
  }, [job]);

  if (!data || !maindata) {
    return <Loader />;
  }

  return (
    <MainContainer>
      <JobsList
        data={data}
        count={data?.length ?? 0}
        jobs
        title={"ძიების შედეგი"}
      />
      <Content>
        <SearchhBar setFilter={setFilter} filter={filter} />
        <Container>
          <MainComponent data={maindata} />
          <Filter
            show={filter}
            setCatPayload={setCatPayload}
            setWorkPayload={setWorkPayload}
            setEmpPayload={setEmpPayload}
            setExpPayload={setExpPayload}
            setSalaryPayload={setSalaryPayload}
            setCityPayload={setCityPayload}
            salaryPayload={salaryPayload}
          />
        </Container>
      </Content>
    </MainContainer>
  );
}

const Container = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  height: calc(100% - 74px);
`;
const MainContainer = styled.div`
  display: flex;
  gap: 24px;
  margin: auto;
  width: calc(100% - 64px);
  height: calc(100vh - 81.11px);
  flex-direction: column;

`;

const Content = styled.div`
  gap: 23px;
  display: flex;
  height: 100%;
  flex-direction: column;
`;
