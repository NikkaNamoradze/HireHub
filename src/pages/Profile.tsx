import styled from "styled-components";

import UserInfo from "../components/userProfile/UserInfo";

import Item from "../components/userProfile/Item";
import SeconItem from "../components/userProfile/SeconItem";
import Modal from "../components/userProfile/Modal";

import MiniModal from "../components/userProfile/MiniModal";
import { useState } from "react";
import BigModal from "../components/userProfile/BigModal";
import { ProfileItemInterface } from "../types";

function Profile() {
  const jobs = [
    {
      id: 1,
      title: "ჰარვარდი",
      position: "მასწავლებელი",
      content: "რამე მოკლე აღწერა",
      startDate: "2023-იან",
      endDate: "2023-აგვ",
    },
    {
      id: 1,
      title: "ჰარვარდი",
      position: "მასწავლებელი",
      content: "რამე მოკლე აღწერა",
      startDate: "2023-იან",
      endDate: "2023-აგვ",
    },
  ];
  const skils = [
    {
      id: 1,
      title: "react js",
    },
    {
      id: 1,
      title: "react js",
    },
  ];

  const [showModal, setShowModal] = useState<number>(0);
  const [modalTitle, setModalTitle] = useState<string>();

  return (
    <Master>
      <MainC>
        <UserInfo username="irinka" />
        <Item
          title="სამუშაო გამოცდილება"
          data={jobs}
          setShowModal={setShowModal}
          setModalTitle={setModalTitle}
        />
        <Item
          title="განათლება"
          data={jobs}
          setShowModal={setShowModal}
          setModalTitle={setModalTitle}
        />
        <SeconItem
          title={"უნარები"}
          data={skils}
          setShowModal={setShowModal}
          setModalTitle={setModalTitle}
        />
        <SeconItem
          title={"ენები"}
          data={skils}
          setShowModal={setShowModal}
          setModalTitle={setModalTitle}
        />
      </MainC>

      {showModal !== 0 && (
        <Modal
          setShowModal={setShowModal}
          title={modalTitle}
          content={showModal === 1 ? <BigModal /> : <MiniModal />}
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
