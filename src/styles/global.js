import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Nunito:400,500,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Rubik:400,700&display=swap');
  @import url('https://cdn.lineicons.com/1.0.1/LineIcons.min.css');

  *{
    padding:0;
    margin:0;
    outline: 0;
    border-box:box-sizing;
  }

  html,
  body,
  #root{
    font-family: 'Nunito', serif;
    height: 100%;
  }

  body{
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font: 14px 'Nunito', serif;
  }

  a{
    text-decoration: none;
  }

  ul{
    list-style:none;
  }

  button{
    font-size:.9rem;
    cursor:pointer;
  }

  h1,h2,h3,h4,h5,h6{
    font-family:'Rubik', serif;
  }

  h1.heading{
    margin-bottom:20px;
    font-weight:400;
    line-height:50px;
  }

  .globalShadow.blue{
    -webkit-box-shadow: 0px 0px 34px -8px rgba(53,63,223,.71);
    -moz-box-shadow: 0px 0px 34px -8px rgba(53,63,223,.71);
    box-shadow: 0px 0px 34px -8px rgba(53,63,223,.71);
  }

  .globalShadow.orange{
    -webkit-box-shadow: 0px 0px 34px -8px rgba(255, 111, 32,.71);
    -moz-box-shadow: 0px 0px 34px -8px rgba(255, 111, 32,.71);
    box-shadow: 0px 0px 34px -8px rgba(255, 111, 32,.71);
  }

  .branding{
    width:60px;
    height:60px;
    border-radius:20px;
  }

`;
