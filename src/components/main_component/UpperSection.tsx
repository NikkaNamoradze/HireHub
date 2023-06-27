import React from "react";
import styled from "styled-components";
import BookmarkIcon from "../../assets/icons/Bookmark.svg";
import { IMAGE_URL } from "../../api/apiConfig";

const UpperSection = ({
  isSaved,
  image,
  company,
  position,
  id,
  location,
  writeJob,
  onDeleteJob,
  setIsSaved,
}: {
  isSaved: boolean;
  id: string;
  writeJob: any;
  onDeleteJob: any;
  image: string;
  company: string;
  position: string;
  location: string;
  setIsSaved: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Container>
      <Div>
        <Logo src={IMAGE_URL(image)} alt="" />
        <SuperDiv>
          <Company>{company}</Company>
          <Position>{position}</Position>
          <Location>{location}</Location>
        </SuperDiv>
      </Div>

      <Icon
        isSaved={isSaved}
        onClick={() => {
          if (!isSaved) {
            setIsSaved((e) => !e);
            writeJob({ userId: "YOUR_USER_ID", jobId: id });
          } else {
            setIsSaved((e) => !e);

            onDeleteJob({ userId: "YOUR_USER_ID", jobId: id });
          }
        }}
      >
        <svg
          width="26"
          height="25"
          viewBox="0 0 26 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.3258 2.08334C19.2616 2.08334 21.6341 3.19793 21.6666 6.03126V21.8438C21.6666 22.0208 21.6233 22.1979 21.5366 22.3542C21.3958 22.6042 21.1574 22.7917 20.8649 22.875C20.5833 22.9583 20.2691 22.9167 20.0091 22.7708L12.9891 19.3958L5.95825 22.7708C5.79684 22.8531 5.61159 22.9063 5.42742 22.9063C4.82075 22.9063 4.33325 22.4271 4.33325 21.8438V6.03126C4.33325 3.19793 6.71659 2.08334 9.64158 2.08334H16.3258ZM17.0624 8.37501H8.90492C8.43909 8.37501 8.05992 8.73959 8.05992 9.19793C8.05992 9.65522 8.43909 10.0208 8.90492 10.0208H17.0624C17.5283 10.0208 17.9074 9.65522 17.9074 9.19793C17.9074 8.73959 17.5283 8.37501 17.0624 8.37501Z"
            fill={isSaved ? "#eeeeee" : "#222222"}
          />
        </svg>
      </Icon>
    </Container>
  );
};

export default UpperSection;

const SuperDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

const Company = styled.h1`
  font-family: "Urbanist";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 23px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 15px;
`;

const Position = styled.p`
  font-family: "Urbanist";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 17px;
`;

const Logo = styled.img`
  width: 81px;
  height: 81px;
  background: #2a9df4;
  border-radius: 25px;
  object-fit: cover;
`;

const Location = styled.p`
  font-family: "Urbanist";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #acacac;
`;

const Icon = styled.button<{ isSaved: boolean }>`
  cursor: pointer;
  transition: 0.5s;
  background-color: ${({ isSaved }) => (isSaved ? "#222222" : "#aeaeae")};
  height: 50px;
  width: 50px;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 15px;
`;
