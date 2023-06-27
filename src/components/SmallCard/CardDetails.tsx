import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CardContainer = styled.div`
  border-radius: 24px;
  width: 304px;
  height: 283px;
  background-color: #f4f3f3;
  padding: 23px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  background: #d9d9d9;
  border-radius: 24px;
  border: 2px solid #ffffff;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  color: #000000;
`;

const JobName = styled.div`
  font-style: normal;
  font-size: 14px;
  line-height: 18px;
  color: #acacac;
  margin-top: 5px;
`;

const EditButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-size: 12px;
  line-height: 18px;
  color: #222222;
`;

const ButtonEdit = styled.button`
  width: 258px;
  height: 47px;
  background-color: white;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 43px;
  border: none;
  outline: none;
  cursor: pointer;
`;

function CardDetails({ image }: { image: string }) {
  return (
    <MainContainer>
      <CardContainer>
        <Image src={image} alt="" loading="lazy" />
        <TextContainer>
          <Title>Revaldo</Title>
          <JobName>UI Designer</JobName>
        </TextContainer>
        <ButtonEdit>
          <EditButton>Edit Profile</EditButton>
        </ButtonEdit>
      </CardContainer>
    </MainContainer>
  );
}

export default CardDetails;




