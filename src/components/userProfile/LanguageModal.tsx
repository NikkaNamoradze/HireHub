import { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import Skill from "./Skill";
import { getDatabase, set, ref } from "@firebase/database";
import { app } from "../../firebase/config";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { ProfileSecondItemInterface } from "../../types";
import { onValue, remove } from "firebase/database";

function LanguageModal() {
  const [language, setLanguage] = useState("");
  const [languageData, setLanguageData] = useState<ProfileSecondItemInterface[]>([]);

  const uid = useSelector((state: RootState) => state.user.uid);

  useEffect(() => {
    const fetchData = async () => {
      const db = getDatabase(app);

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
    };

    fetchData();
  }, [uid]);

  const generateRandomId = () => {
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    const randomSymbols = Array.from({ length: 3 }, () =>
      String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    ).join("");
    return `${randomNumber}${randomSymbols}`;
  };


  const onSave = () => {
    const id = generateRandomId()
    const db = getDatabase(app);
    set(ref(db, "users/" + `${uid}/` + "language/" + `${id}/`), {
        id:id,
        title: language,
    });
  };

  const onDeleteSkill = (id: string) => {
    const db = getDatabase(app);
    const skillRef = ref(db, `users/${uid}/language/${id}`);
    
    remove(skillRef)
      .then(() => {
      })
      .catch((error) => {
      });

      if(languageData.length === 1){
        setLanguageData([])
      }
  };

  

  return (
    <FormContainer>
      <Mamamtavari>
        {languageData.map((item) => (
          <Skill key={item.id} title={item.title} onClick={() => onDeleteSkill(item.id)}/>
        ))}
      </Mamamtavari>
      <Input label={"სასაუბრო ენა"} value={language} setValue={setLanguage} />
      <CloseButton onClick={onSave}>შენახვა</CloseButton>
    </FormContainer>
  );
}

export default LanguageModal;

const Mamamtavari = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  padding: 10px;
  margin-bottom: 20px;
`;



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
`;