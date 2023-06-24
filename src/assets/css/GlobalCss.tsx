import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Urbanist';
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
  }
`;
