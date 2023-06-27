import { useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { getDatabase, set, ref } from "@firebase/database";
import { app } from "../../firebase/config";

function ExperienceModal() {

  const [organisation, setOrganisation] = useState("");
  const [position, setPosition] = useState("");
  const [content, setContent] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const uid = useSelector((state: RootState) => state.user.uid);

  const generateRandomId = () => {
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    const randomSymbols = Array.from({ length: 3 }, () =>
      String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    ).join("");
    return `${randomNumber}${randomSymbols}`;
  };

  const onSaveExperience = () => {
    const id = generateRandomId();

    const db = getDatabase(app);
        set(ref(db, "users/" + `${uid}/` + "experience/" + `${id}/`), {
          id:id,
          organisation:organisation,
          position:position,
          content:content,
          startDate:startDate,
          endDate:endDate
        });
  };
  

  return (
    <FormContainer>
      <Input label={'ორგანიზაცია'} value={organisation} setValue={setOrganisation}/>
      <Input label={'თანამდებობა'} value={position} setValue={setPosition}/>
      <Input label={'მოკლე აღწერა'} value={content} setValue={setContent}/>
      <Input label={'დაწყების თარიღი'} value={startDate} setValue={setStartDate}/>
      <Input label={'დასრულების თარიღი'} value={endDate} setValue={setEndDate}/>
      <CloseButton onClick={onSaveExperience}>შენახვა</CloseButton>
    </FormContainer>
  );
}

export default ExperienceModal;


const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;


const CloseButton = styled.button`
  margin-top: 32px;
  background: #222222;
  color: #ffffff;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 16px 50px;
  gap: 10px;
  cursor: pointer;
`;