
import styled from "styled-components";

function Item({ title, content }: { title: string; content: JSX.Element }) {
  return (
    <Container>
      <Title>{title}</Title>
      {content}
    </Container>
  );
}

export default Item;

const Container = styled.div`
  width: 100%;

`;

const Title = styled.div`
  color: #222222;
  font-size: 18px;
  margin-bottom: 25px;
  font-weight: 700;
`;
