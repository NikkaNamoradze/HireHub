import React, { useEffect, useState } from "react";
import styled from "styled-components";
import UpperSection from "./UpperSection";
import Vigets from "./Vigets";
import Switcher from "./Switcher";
import { DataInterface } from "../../types";
import Description from "./Description";
import { getDatabase, ref, set, remove, onValue } from "firebase/database";

import MapComponentn from "./Map";
import { app } from "../../firebase/config";

import { media } from "../../assets/css/GlobalCss";

import { RootState } from "../../store/store";
import { useSelector } from "react-redux";


function MainComponent({ data }: { data: DataInterface }) {
  const uid = useSelector((state: RootState) => state.user.uid);

  if (!data) {
    return null;
  }

  const [swithch, setSwitch] = useState<boolean>(true);

  const {
    id,
    address,
    info,
    business,
    name,
    working_type,
    employment_type,
    approximate_salary,
    end_date,
  } = data;

  const [firebaseData, setFirebaseData] = useState<DataInterface[]>([]);
  const [isSaved, setIsSaved] = useState<boolean>(false);

  useEffect(() => {
    const db = getDatabase(app);
    const starCountRef = ref(db, "users/" + uid + "/saved");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const arr = Object.values(data);

      setFirebaseData(arr as DataInterface[]);
    });
  }, []);

  useEffect(() => {
    const savedarr = [""];
    const sendedarr = [""];
    firebaseData.map((item) => {
      savedarr.push(item.id);

      if (savedarr.includes(id)) {
        setIsSaved(true);
      } else {
        setIsSaved(false);
      }
    });
  }, [firebaseData, data, isSaved]);

  function writeJob({ userId, jobId }: { userId: string; jobId: string }) {
    const db = getDatabase(app);
    set(ref(db, "users/" + userId + "/saved" + `/${jobId}/`), data);
  }

  const onDeleteJob = ({
    userId,
    jobId,
  }: {
    userId: string;
    jobId: string;
  }) => {
    const db = getDatabase(app);
    const skillRef = ref(db, "users/" + userId + "/saved" + `/${jobId}/`);

    remove(skillRef)
      .then(() => {})
      .catch((error: any) => {});
  };

  const [cv, setCv] = useState<any>();

  useEffect(() => {
    const db = getDatabase(app);

    const skillRef = ref(db, "users/" + userId + "/saved" + `/${jobId}/`);
    
    remove(skillRef).then(() => {
    })
    .catch((error:any) => {

    const starCountRef = ref(db, "users/" + uid);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      delete data.saved;

      setCv(data);

    });
  }, []);

  function sedCV({
    userId,
    jobName,
    companyID,
  }: {
    userId: string;
    jobName: string;
    companyID: string;
  }) {
    const db = getDatabase(app);
    set(ref(db, "CV/" + `${companyID}/` + `/${jobName}/${userId}`), cv);
  }
  const [isSended, setIsSend] = useState(false);

  useEffect(()=>{

    setIsSend(false)
  },[data])

  return (
    <Container>
      <Content>
        <UpperSection
          id={id}
          setIsSaved={setIsSaved}
          isSaved={isSaved}
          writeJob={writeJob}
          onDeleteJob={onDeleteJob}
          company={business?.official_name}
          position={name}
          location={address?.secondary_text}
          image={business?.image.name}
        />
        <Vigets
          salary={approximate_salary.text}
          jobType={working_type}
          dedline={end_date}
          employment_type={employment_type}
        />
        <Switcher swithch={swithch} setSwitch={setSwitch} />

        {swithch ? (
          <Description
            title={"სამუშაოს აღწერა"}
            description={info.about_role}
          />
        ) : (
          <>
            <Description
              title={"კომპანიის აღწერა"}
              description={business.description}
            />
            {address && (
              <MapComponentn
                address={address?.description}
                lat={address?.lat}
                lng={address?.lng}
              />
            )}
          </>
        )}

        <Apply
          onClick={() => {
            if(uid){
            sedCV({
              userId: uid as string,
              jobName: name,
              companyID: business.uid,
            });
            setIsSend(true);
          }}}

          isSended={isSended}
        >
          {
            isSended?"წარმატებით გაიგზავნა": "რეზიუმეს გაგზავნა"
          }

        </Apply>
      </Content>
    </Container>
  );
}

export default MainComponent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 23px;
  background: #f4f3f3;
  border-radius: 24px;
  padding: 23px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  gap: 23px;
`;

const Apply = styled.button<{isSended:boolean}>`
  padding: 18px 256px;
  gap: 10px;
  transition: 0.3s;
  cursor: pointer;
  background: ${({isSended})=>isSended?"#656565":"#222222"};
  border-radius: 21px;
  color: #ffffff;
  margin: auto;

  ${media.phone(`
    font-size: 16px;
    padding: 18px 100px;

  `)}
`;
