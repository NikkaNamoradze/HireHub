import React, { Component } from 'react'
import styled from 'styled-components';


function Switcher({swithch, setSwitch}:{swithch:boolean, setSwitch: React.Dispatch<React.SetStateAction<boolean>>}) {




    return (
      <Div>
        <Button onClick={()=>{setSwitch(true)}} color={swithch} >
            აღწერა
        </Button>
        <Button onClick={()=>{setSwitch(false)}} color={!swithch}>
            კომპანია
        </Button>
      </Div>
    )
  }


export default Switcher


const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 11px;
`;
const Button =  styled.button < {color:any} >`
    background: ${({ color }) => (color ? "#222222" : "#ffffff")};
    color: ${({ color }) => (color ? "#ffffff" : "#222222")};
    border-radius: 25px;
    display: flex;
    transition: 0.3s;
    flex-direction: row;
    align-items: flex-start;
    padding: 16px 117px;
    gap: 10px;
    &:hover{
      background-color: #5a5a5a;
      transition: 0.5s;
      color:#f4f3f3;

    }

    `;
