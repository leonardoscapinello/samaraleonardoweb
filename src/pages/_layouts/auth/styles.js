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
  padding: 0 30px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      border: none;
      border-bottom: 1px #ededf9 solid;
      color: #212548;
      font-size: 1rem;
      padding: 16px 0;
      margin: 10px 0;
      font-weight: 500;
    }

    h1 {
      text-align: left;
      font-weight: 300;
    }

    button {
      color: #ffffff;
      background: #353fdf;
      border: none;
      border-radius: 40px;
      padding: 14px 0;
      margin-top: 30px;
    }

    .branding {
      margin-bottom: 40px;
    }

    span {
      box-sizing: border-box;
      width: 100%;
      background: rgba(255, 32, 32, 1);
      color: #ffffff;
      text-align: left;
      line-height: 30px;
      padding: 0 20px;
      border-radius: 7px;
      -webkit-box-shadow: 0px 0px 34px -8px rgba(255, 32, 32, 0.71);
      -moz-box-shadow: 0px 0px 34px -8px rgba(255, 32, 32, 0.71);
      box-shadow: 0px 0px 34px -8px rgba(255, 32, 32, 0.71);
      transition: all 0.3s;
    }

    .buttonLoader{
      margin-top:30px;
      height:48px
    }

  }
`;
