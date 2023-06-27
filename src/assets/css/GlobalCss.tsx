import { createGlobalStyle } from "styled-components";
import styled from "styled-components";


const sizes = {
  desktop: 1199.98,
  tablet: 991.98,
  phone: 767.98,
  smallDevices:575.98
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  const sizeLabel = label as keyof typeof sizes;
  acc[sizeLabel] = (style: string) => `
    @media (max-width: ${sizes[sizeLabel]}px) {
      ${style}
    }
  `;

  return acc;
}, {} as { [key: string]: (style: string) => string });

export const GlobalStyles = createGlobalStyle`
  


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "BPG Algeti", sans-serif !important;
    text-decoration: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  body{
    
  }
  img{
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
  button{
    all:unset;
  }
  a{
    text-decoration: none;
  }
  
  h1, span , a{
    color: #ACACAC;
font-size: 13px;
text-decoration: none;

line-height: 129%;
font-family: "BPG Algeti", sans-serif !important;

  }
`;
