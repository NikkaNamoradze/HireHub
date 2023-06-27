import { getDatabase, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ExperienceModal from "../components/userProfile/EperienceModal";
import Item from "../components/userProfile/Item";
import LanguageModal from "../components/userProfile/LanguageModal";
import Modal from "../components/userProfile/Modal";
import SeconItem from "../components/userProfile/SeconItem";
import UserInfo from "../components/userProfile/UserInfo";
import { app } from "../firebase/config";
import { RootState } from "../store/store";
import {
  EducationItemInterface,
  ExperienceItemInterface,
  ProfileSecondItemInterface,
} from "../types";
import EducationModal from "../components/userProfile/EducationalModal";
import SkillModal from "../components/userProfile/SkillModal";

function Profile() {
  const [showModal, setShowModal] = useState<number>(0);
  const [modalTitle, setModalTitle] = useState<string>();
  const [expData, setExpData] = useState<ExperienceItemInterface[]>([]);
  const [eduData, setEduData] = useState<EducationItemInterface[]>([]);
  const [languageData, setLanguageData] = useState<ProfileSecondItemInterface[]>([]);
  const [skillData, setSkillData] = useState<ProfileSecondItemInterface[]>([]);

  const uid = useSelector((state: RootState) => state.user.uid);

  useEffect(() => {
    const fetchData = async () => {
      const db = getDatabase(app);

      // Fetch experience data
      const experienceRef = ref(db, `users/${uid}/experience`);
      onValue(experienceRef, (snapshot) => {
        const data: { [key: string]: ExperienceItemInterface } = snapshot.val();
        if (data) {
          const experienceData = Object.values(data).map((item) => ({
            id: item.id,
            organisation: item.organisation,
            position: item.position,
            content: item.content,
            startDate: item.startDate,
            endDate: item.endDate,
          }));
          setExpData(experienceData);
        }
      });

      // Fetch education data
      const educationRef = ref(db, `users/${uid}/university`);
      onValue(educationRef, (snapshot) => {
        const data: { [key: string]: EducationItemInterface } = snapshot.val();
        if (data) {
          const educationData = Object.values(data).map((item) => ({
            id: item.id,
            university: item.university,
            field: item.field,
            startDate: item.startDate,
            endDate: item.endDate,
          }));
          setEduData(educationData);
        }
      });

      // Fetch language data
      const languageRef = ref(db, `users/${uid}/language`);
      onValue(languageRef, (snapshot) => {
        const data: { [key: string]: ProfileSecondItemInterface } =
          snapshot.val();
        if (data) {
          const languageData = Object.values(data).map((item) => ({
            id: item.id,
            title: item.title,
          }));
          setLanguageData(languageData);
        }
      });

      // Fetch skills data
      const skillsRef = ref(db, `users/${uid}/skills`);
      onValue(skillsRef, (snapshot) => {
        const data: { [key: string]: ProfileSecondItemInterface } =
          snapshot.val();
        if (data) {
          const skillsData = Object.values(data).map((item) => ({
            id: item.id,
            title: item.title,
          }));
          setSkillData(skillsData);
        }
      });
    };

    fetchData();
  }, [uid]);

  return (
    <Master>
      <MainC>
        <UserInfo username="irinka" />
        <Item
          title="სამუშაო გამოცდილება"
          data={expData}
          setShowModal={setShowModal}
          setModalTitle={setModalTitle}
        />
        <Item
          title="განათლება"
          data={eduData}
          setShowModal={setShowModal}
          setModalTitle={setModalTitle}
        />
        <SeconItem
          title={"უნარები"}
          data={skillData}
          setShowModal={setShowModal}
          setModalTitle={setModalTitle}
        />
        <SeconItem
          title={"ენები"}
          data={languageData}
          setShowModal={setShowModal}
          setModalTitle={setModalTitle}
        />
      </MainC>

      {showModal !== 0 && (
        <Modal
          setShowModal={setShowModal}
          title={modalTitle}
          content={
            showModal === 1 ? (
              <ExperienceModal />
            ) : showModal === 2 ? (
              <EducationModal />
            ) : showModal === 3 ? (
              <SkillModal />
            ) : (
              <LanguageModal />
            )
          }
        />
      )}
    </Master>
  );
}

export default Profile;

const Master = styled.div`
  margin: auto;
  display: flex;
  width: 80vw;
  padding-top: 73px;
`;

const MainC = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 32px;
`;