import React from "react";
import styled from "styled-components";
import Section from "./Section";
import add from "../../assets/icons/add.svg";
import { EducationItemInterface, ExperienceItemInterface } from "../../types";
import { getDatabase, ref, remove } from "firebase/database";
import { useSelector } from "react-redux";
import { app } from "../../firebase/config";
import { RootState } from "../../store/store";

interface ItemProps {
  data: (ExperienceItemInterface | EducationItemInterface)[];
  title: string;
  setShowModal: React.Dispatch<React.SetStateAction<number>>;
  setModalTitle: React.Dispatch<React.SetStateAction<string | undefined>>;
}

function Item({ data, title, setShowModal, setModalTitle }: ItemProps) {
  const handleAddButtonClick = () => {
    setShowModal(title === "სამუშაო გამოცდილება" ? 1 : 2);
    setModalTitle(`დაამატე ${title}`);
  };

  const uid = useSelector((state: RootState) => state.user.uid);

  const onDeleteExperience = (id: string) => {
    const db = getDatabase(app);
    const skillRef = ref(db, `users/${uid}/experience/${id}`);

    remove(skillRef)
      .then(() => {
        console.log(`Skill with ID ${id} deleted successfully.`);
      })
      .catch((error) => {
        console.error(`Error deleting skill with ID ${id}:`, error);
      });
  };

  const onDeleteEducation = (id: string) => {
    const db = getDatabase(app);
    const skillRef = ref(db, `users/${uid}/university/${id}`);

    remove(skillRef)
      .then(() => {
        console.log(`Skill with ID ${id} deleted successfully.`);
      })
      .catch((error) => {
        console.error(`Error deleting skill with ID ${id}:`, error);
      });
  };

  return (
    <Container>
      <Icon onClick={handleAddButtonClick}>
        <img src={add} alt="editIcon" />
      </Icon>
      <h3>{title}</h3>
      {data.map((item, index) => {
        if ("organisation" in item) {
          const experienceItem = item as ExperienceItemInterface;
          return (
            <Section
              onClick={() => onDeleteExperience(experienceItem.id)}
              key={index}
              title={experienceItem.organisation}
              position={experienceItem.position}
              content={experienceItem.content}
              startDate={experienceItem.startDate}
              endDate={experienceItem.endDate}
              id={experienceItem.id}
            />
          );
        } else if ("university" in item) {
          const educationItem = item as EducationItemInterface;
          return (
            <Section
              onClick={() => onDeleteEducation(educationItem.id)}
              key={index}
              title={educationItem.university}
              position={educationItem.field}
              startDate={educationItem.startDate}
              endDate={educationItem.endDate}
              id={educationItem.id}
            />
          );
        }
        return null;
      })}
    </Container>
  );
}

export default Item;

const Icon = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  flex-shrink: 0;
  border-radius: 24px;
  background: #f4f3f3;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 25px;
  padding: 20px 63px 48px 63px;
  /* margin-bottom: 32px; */

  h3 {
    display: flex;
    color: #acacac;
    font-size: 24px;
    font-family: "BPG Nino Mtavruli";
    font-weight: normal;
    font-weight: "400";
    word-wrap: "break-word";
    align-self: flex-start;
  }
`;