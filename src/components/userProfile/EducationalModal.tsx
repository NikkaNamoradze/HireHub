import { getDatabase, ref, set } from "@firebase/database";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { app } from "../../firebase/config";
import { RootState } from "../../store/store";
import Input from "./Input";

function EducationModal() {
  const [university, setUniversity] = useState("");
  const [field, setField] = useState("");
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

  const onSaveEducation = () => {
    const id = generateRandomId();
    const db = getDatabase(app);
    set(ref(db, "users/" + `${uid}/` + "university/" + `${id}/`), {
      id: id,
      university: university,
      field: field,
      startDate: startDate,
      endDate: endDate,
    });
  };


  return (
    <FormContainer>
      <Input
        label={"უნივერსიტეტი"}
        value={university}
        setValue={setUniversity}
      />
      <Input label={"მიმართულება"} value={field} setValue={setField} />
      <Input
        label={"დაწყების თარიღი"}
        value={startDate}
        setValue={setStartDate}
      />
      <Input
        label={"დასრულების თარიღი"}
        value={endDate}
        setValue={setEndDate}
      />
      <CloseButton onClick={onSaveEducation}>შენახვა</CloseButton>
    </FormContainer>
  );
}

export default EducationModal;

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