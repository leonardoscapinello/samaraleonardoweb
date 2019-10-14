import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    padding:0;
    margin:0;
    outline: 0;
    border-box:box-sizing;
  }

  html,
  body,
  #root{
    height: 100%;
  }

  body{
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font: 14px 'Roboto', serif;
  }

  a{
    text-decoration: none;
  }

  ul{
    list-style:none;
  }

  button{
    cursor:none;
  }

`;
