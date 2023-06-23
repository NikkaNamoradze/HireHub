import React from 'react';
import styled from 'styled-components';

interface Box {
  title: string;
  
}

const MiniBox: React.FC<Box> = ({ title}) => {
  return (
    <Containerr>
      <Title><p>{title}</p></Title>
    </Containerr>

  );
};

export default MiniBox;



const Containerr = styled.div`
display: inline-flex;
padding: 13px 52px;
align-items: flex-start;
gap: 10px;

border-radius: 16px;
background: #D9D9D9;
`;
const Title = styled.p`
color: #000;
font-size: 24px;
font-family:'BPG Nino Mtavruli';

`;
