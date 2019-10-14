import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form{
    display:flex;
    flex-direction: column;
    margin-top:30px;
  }
  
  input{
    border:none;
    border-bottom:1px #EDEDF9 solid;
    color:#212548;
    font-size:1rem;
    padding:16px 0;
    margin:10px 0;
    font-weight:500;
  }

  h1{
    text-align:left;
    font-weight:300;
  }

  button{
    color:#FFFFFF;
    background:#353FDF;
    border:none;
    border-radius:40px;
    padding:14px 0;
    margin-top:50px;
  }

  .branding{
    margin-bottom:40px;
  }

`;
