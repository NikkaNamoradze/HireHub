import React, { Component } from 'react'
import styled from 'styled-components';


function Switcher() {
    return (
      <Div>
        <Button color={true} >
            აღწერა
        </Button>
        <Button color={false}>
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
    flex-direction: row;
    align-items: flex-start;
    padding: 16px 117px;
    gap: 10px;

    `;
